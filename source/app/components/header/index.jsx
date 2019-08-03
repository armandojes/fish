import React from 'react';
import style from './style.css';
import Container from '../container';

function Header () {
  return (
    <header>
      <div className={style.header_ext}>
        <Container>
          <div className={style.header_int}>
            <img className={style.logo} src="/public/img/text.svg"/>
            <div className={style.menu_content}>
              <a className={style.link} href="https://developers.facebook.com/products">Productos</a>
              <a className={style.link} href="https://developers.facebook.com/docs">Documentos</a>
              <a className={style.link} href="https://developers.facebook.com">Mas</a>
            </div>
          </div>
        </Container>
      </div>
      <div className={style.shadow_header} />
    </header>
  )
}

export default Header;
