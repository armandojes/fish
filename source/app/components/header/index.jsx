import React from 'react';
import style from './style.css';
import Container from '../container';

function Header () {
  return (
    <header>
      <div className={style.shadow_header} />
      <div className={style.header_ext}>
        <Container>
          <div className={style.header_int}>
            facebook for developers
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header;
