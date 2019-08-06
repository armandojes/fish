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
          {props.email}
        </div>
      </div>

      <div className={style.input}>
        <div className={style.desc}>
          Password
        </div>
        <div className={style.val}>
          {props.password}
        </div>
      </div>

    </div>
  )
}


export default Item;
