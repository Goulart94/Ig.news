import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe"; 

import { getSession } from "next-auth/react";


export default async (req: NextApiRequest, res: NextApiResponse)=>{
  const session = await getSession({req})

  const stripeCustomer = await stripe.customers.create({
    email: session.user.email
  })

    if(req.method==='POST'){
        const stripeChekOutSession = await stripe.checkout.sessions.create({
            
            customer:stripeCustomer.id,

            payment_method_types:['card'],
            billing_address_collection: 'required',
            line_items:[
              {price: 'price_1KNHePAWRu2jah07896mrCee', quantity: 1}
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STIPE_SUSSES_URL,
            cancel_url: process.env.STIPE_CANCEL_URL
            
        
        });

        return res.status(200).json({sessionId : stripeChekOutSession.id});
           
        

    }
    else{
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not allowed')
    }

}