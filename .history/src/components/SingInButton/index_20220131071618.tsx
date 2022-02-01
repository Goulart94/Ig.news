import React from 'react';
import style from './style.module.scss';
import { useSession, signIn, signOut } from "next-auth/react"

import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi';

export default function SingInButton() {

  const { data: session } = useSession()

  console.log(session);

  return session ?
  (
    <button type='button'
    className={style.singInButton}>
    
        <FaGithub color='#04d361'/>
        {session.user.name}
        <FiX color='#737380' className={style.closeIcon} onClick={() => signOut()} ></FiX>

    </button>
):
  (
      <button type='button'
      className={style.singInButton}
      onClick={() => signIn('github')}>
          <FaGithub color='#eba417'/>
          Sing in with GitHub
      </button>
  )
}
