import React from 'react';
import Container from '../container';
import renderHtml from '../html';
import style from './style';


function Readme (props) {
  return (
    <Container>
      <div className={style.content} dangerouslySetInnerHTML={{__html: renderHtml()}}/>
    </Container>
  )
}

export default Readme;
