import Link from 'next/link';
import React from 'react';
import style from '../header/style.module.scss'
import Button from '../SingInButton';
import { useRouter } from 'next/router';

export default function Header() {

  const {asPath} = useRouter();
  return (
    <header className={style.HeaderComtainer}>
         <div className={style.HeaderContent}>
            <img src="/images/logo.svg" alt="Logo" />
            <nav>
                <Link href={'/'}>
                <a className={asPath === '/' ? style.active : ''}>Home</a>
                </Link>
                <Link href={'/posts'}>
                <a>Post</a>
                </Link>

            </nav>
            <Button></Button>
         </div>
    </header>
  );
}
