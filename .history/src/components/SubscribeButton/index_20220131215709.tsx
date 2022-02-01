import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';
import style from './style.module.scss';

interface SubscribeProductProps{
  priceId: string
}

export default function SubscribeButton({priceId}:SubscribeProductProps) {
  const { data: session } = useSession()
  
  async function hendleSubscribe(){
    if(!session){
      signIn('github')
      return;

    }
    try{
      const response = await axios.post('/subscribe')

      const {sessionId} = response.data

    }catch(err){

    }
  }
  return (
      <button type="button" className={style.subscribeButton} onClick={hendleSubscribe}>
          Subscribe now
      </button>

  );
}
