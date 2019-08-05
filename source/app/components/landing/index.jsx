import React from 'react';
import style from './style';
import Container from '../container';



function Landing (props) {

  const {finish} = props;

  function handleClick (e){
    props.set_modal(true);
  }

  return (
    <section className={style.landing_ext}>
      <Container>
        <div className={style.landing_int}>
          <div className={style.descript}>
            <div className={style.proyect}>Proyect</div>
            <div className={style.title}>
              <img className={style.logo} src="/public/img/react.svg" />
              react-ssr
            </div>
            <p className={style.desc_text}>
              is a simple and lightweight React server-side rendering solution that abstracts the complexities of server-side rendering
            </p>
            <div className={style.own}>
              <div>
                Developed by
              </div>
              <div className={style.users_content}>
                <a href="https://www.facebook.com/capitanntripa" className={style.link_user}><img className={style.icon_user} src="/public/img/armando.jpg" />Armando de jesus</a> &nbsp; and <a href="https://www.facebook.com/platzi" className={style.link_user}><img className={style.icon_user} src="/public/img/platzi.png" />Platzi</a>
              </div>
            </div>
          </div>
          <div className={style.stats_content}>
            <div className={style.box}>
              <ul className={style.content_limit}>
                <li className={style.row}>
                  <div className={style.name}>
                    <img className={style.icon} src="/public/img/like.png" /> Votes:
                  </div>
                  <div className={style.votes}>
                    {props.votes}
                  </div>
                </li>
                <li className={style.row}>
                  <div className={style.name}>
                    <img className={style.icon} src="/public/img/fork.png" /> Fork:
                  </div>
                  <div className={style.votes}>
                    152
                  </div>
                </li>
                <li className={style.row}>
                  <div className={style.name}>
                    <img className={style.icon} src="/public/img/pull_requests.png" /> Pull requests:
                  </div>
                  <div className={style.votes}>
                    5
                  </div>
                </li>
                <li className={style.row}>
                  <div className={style.name}>
                    <img className={style.icon} src="/public/img/issues.png" /> Issues:
                  </div>
                  <div className={style.votes}>
                    613
                  </div>
                </li>
              </ul>

              {!finish && (
                <div className={style.button} onClick={handleClick}>
                  <img className={style.icon_button} src="/public/img/vote.png" /> Vote
                </div>
              )}
              {finish && (
                <div className={style.button_finished} >
                  <img className={style.icon_button} src="/public/img/vote.png" /> Voted
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Landing;
