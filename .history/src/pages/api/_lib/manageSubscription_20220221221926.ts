import { fauna } from "../../../services/fauna";
import { query as q } from "faunadb";

export async function saveSubscription(subscription: string, costumerId:string, ) {

    const userRef = await fauna.query(
        q.Select(
            "ref",
            q.Get(
                q.Match(
                    q.Index("user_by_costumer_id"),
                    costumerId
                )
            )
        )

    )
    
}