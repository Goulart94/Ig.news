import Stripe from "stripe";
import {name} from '../../package.json'


export const stripe = new Stripe(
    process.env.STRIPE_API_KEY,
    {
        apiVersion: '2020-08-27',
        appInfo:{
            name: name,
            version: '0.1.0'
        },
    }
)