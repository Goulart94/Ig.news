import { signIn, useSession } from 'next-auth/react';
import style from './style.module.scss';

interface SubscribeProductProps{
  priceId: string
}

export default function SubscribeButton({priceId}:SubscribeProductProps) {
  const { data: session } = useSession()
  
  function hendleSubscribe(){
    if(!session){
      signIn('github')
      return;

    }

  }
  return (
      <button type="button" className={style.subscribeButton} onClick={hendleSubscribe}>
          Subscribe now
      </button>

  );
}
