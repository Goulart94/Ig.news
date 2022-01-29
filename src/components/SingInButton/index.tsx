import React from 'react';
import style from './style.module.scss';

import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi';
export default function SingInButton() {

    const userLogin = true;

  return userLogin ?
  (
    <button type='button'
    className={style.singInButton}>
        <FaGithub color='#04d361'/>
        Goulart94
        <FiX color='#737380' className={style.closeIcon}></FiX>

    </button>
):
  (
      <button type='button'
      className={style.singInButton}>
          <FaGithub color='#eba417'/>
          Sing in with GitHub
      </button>
  )
}
