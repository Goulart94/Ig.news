import { stripe } from './../../../services/stripe';
import { fauna } from "../../../services/fauna";
import { query as q } from "faunadb";

export async function saveSubscription(subscriptionId: string, customerId:string, createdAction = false, ) {

    const userRef = await fauna.query(
        q.Select(
            "ref",
            q.Get(
                q.Match(
                    q.Index("user_by_stripe_custumer_id"),
                    customerId
                )
            )
        )

    )
    
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)

    const subscriptionData={
       id: subscription.id,
       userId: userRef,
       status: subscription.status,
       price_id: subscription.items.data[0].price.id,

    }

    if(createdAction){
         await fauna.query(
          q.Create(
            q.Collection("subscriptions"),
            {data: subscriptionData}
          )
        )
    }else{
        
    }

    
}