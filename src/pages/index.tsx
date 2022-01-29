import Head from "next/head";
import SubscribeButton from "../components/SubscribeButton";
import home from './homeStyle.module.scss'


export default function Home() {
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
           <span>for $9.98 month</span>  
         </p>
         <SubscribeButton></SubscribeButton>
       </section>

       <img src='/images/avatar.svg' alt="girl coding"></img>
    </main>
  </>
  
  );
}
