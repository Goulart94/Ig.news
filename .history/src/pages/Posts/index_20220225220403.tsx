import React from 'react'
import style from './style.module.scss';

export default function Post() {
  return (
    <>

    <main {style.container}>
        <div {style.contant}>
            <a>
              <time> 24 de fereiro, 2022</time>
              <strong>Post test rodando </strong>
              <p>
              test  test  test  test  test  test  test  test  test  test  test  test  test  test 
              </p>
            
            </a>
            <a>
              <time> 23 de fereiro, 2022</time>
              <strong>Post test rodando2</strong>
              <p>
              test  test  test  test  test  test  test  test  test  test  test  test  test  test 
              </p>
            
            </a>
        </div>
    </main>
    
    </>
  )
}
