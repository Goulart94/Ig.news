import { type } from 'os';
import { Stripe } from 'stripe';
import { api } from './api';
import { NextApiRequest, NextApiResponse } from "next";
import {Readable} from "stream";
import { stripe } from '../../services/stripe';
import { FaBlackberry } from 'react-icons/fa';
import { saveSubscription } from './_lib/manageSubscription';

async function buffer(readable:Readable) {
    const chunks = [];

    for await(const chunk of readable){
        chunks.push(
            typeof chunk === 'string' ? Buffer.from(chunk) : chunk
        );
    }
    return Buffer.concat(chunks);
}

export const config = {
   api:{
       bodyParser : false

   },

}
const relevantEvent = new Set([
    
        'checkout.session.completed',
        'custome.subscription.updated',
        'custome.subscription.deleted',


]);

export default async (req: NextApiRequest, res: NextApiResponse)=>{
    
   if(req.method==='POST'){
     const buf = await buffer(req)
     const secret = req.headers['stripe-signature']

     let event : Stripe.Event;

     try{
         event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_SECRET_WEBHOOKS)
     } catch(err){
        return res.status(400).send(`webhooks error: ${err.message}` );
     }
    
     const type = event.type

     if(relevantEvent.has(type)){
         
        try{
            switch(type){

            
                case 'customer.subscription.updated':
                case 'customer.subscription.deleted':

                const subscription = event.data.object as Stripe.Subscription;
                  
                await saveSubscription(
                    subscription.id,
                    subscription.customer.toString(),
                    false
                );



                break;
                case 'checkout.session.completed':
                    const checkoutSession = event.data.object as Stripe.Checkout.Session
                    
                    await saveSubscription(
                        checkoutSession.subscription.toString(),
                        checkoutSession.customer.toString(),
                        true
                    )

                   
                break;
                default:
                    throw new Error('unHandle event.');
                    
            }

        }catch(err){
           
            return res.status(400).json({err : 'webhooks fail'})
        }

     }

    res.json({received: true})

   } else{
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
   };
}
