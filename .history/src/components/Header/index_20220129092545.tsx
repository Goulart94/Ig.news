import React from 'react';
import style from '../header/style.module.scss'
import Button from '../SingInButton';

export default function Header() {
  return (
    <header className={style.HeaderComtainer}>
         <div className={style.HeaderContent}>
            <img src="/images/logo.svg" alt="Logo" />
            <nav>
                <a className={style.active}>Home</a>
                <a>Post</a>
            </nav>
            <Button></Button>
         </div>
    </header>
  );
}
