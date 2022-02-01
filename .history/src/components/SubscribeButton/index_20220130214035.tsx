import style from './style.module.scss';

export default function SubscribeButton() {
  function hendleSubscribe(){
    
  }
  return (
      <button type="button" className={style.subscribeButton} onClick={hendleSubscribe}>
          Subscribe now
      </button>

  );
}
