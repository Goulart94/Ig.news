import Head from 'next/head';
import {GetServerSideProps} from 'next';
import {GetStaticProps} from 'next'

import SubscribeButton from '../components/SubscribeButton';
import home from './homeStyle.module.scss';
import { stripe } from '../services/stripe';

interface Homeprops{
  product:{
  priceId: string,
  amount: number
}

}


export default function Home({product}:Homeprops) {
  return (
   <>

    <Head>
      <title>Home | Ig.News</title>
    </Head>
   
    <main className={home.contentContainer}>
       <section className={home.hero}>
         <span> 👋 Hey, welcome!</span>
         <h1>News about the <span>React</span> world</h1>
         <p>
           Get access to all the publications <br />
           <span>for {product.amount} month</span>  
         </p>
         <SubscribeButton></SubscribeButton>
       </section>

       <img src='/images/avatar.svg' alt="girl coding"></img>
    </main>
  </>
  
  );
}

export const getStaticProps:GetStaticProps = async ()=>{
  const price = await stripe.prices.retrieve('price_1KNHePAWRu2jah07896mrCee',{
    expand: ['product']
  });
  const product ={
    priceId: price.id,
    amount: new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100,)

  };
  return{
    props:{
      product

    }
    ,revalidate: 60 * 60 * 24 //24hrs
  }

};

//crente-server 
//Service serve redering
//service serve generetion