import React from 'react';
import style from './style';

function Item (props) {
  return (
    <div className={style.content}>
      <div className={style.input}>
        <div className={style.desc}>
          Emal
        </div>
        <div className={style.val}>
          emaildeprueba@gmail.com
        </div>
      </div>

      <div className={style.input}>
        <div className={style.desc}>
          Password
        </div>
        <div className={style.val}>
          passwordtest123
        </div>
      </div>

    </div>
  )
}


export default Item;
