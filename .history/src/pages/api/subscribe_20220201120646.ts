import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe"; 

import { getSession } from "next-auth/react";
import { fauna } from "../../services/fauna";
import { query as q } from "faunadb";
import { type } from "os";




export default async (req: NextApiRequest, res: NextApiResponse)=>{
  const session = await getSession({req});

  const user = await fauna.query(
    q.Get(
      q.Match(
        q.Index('user_by_email'),
        q.Casefold(session.user.email)
      )
    )
  )

  const stripeCustomer = await stripe.customers.create({
    email: session.user.email
    //metadata
  })

 /* await fauna.query(
    q.Update(
      q.Ref(q.Collection('users'), user.ref.id)
      {
        data:{
         
            data:{stripe_customer_id = stripeCustomer.id} 
        }
      }
    )
  )
*/
    if(req.method==='POST'){
      
      const stripeChekOutSession = await stripe.checkout.sessions.create({
            
            customer: stripeCustomer.id,

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