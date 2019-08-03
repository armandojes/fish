import React from 'react';
import style from './style';
import Container from '../container';

function Landing (props) {
  return (
    <section className={style.landing_ext}>
      <Container>
        <div className={style.landing_int}>
          <div className={style.descript}>
            <div className={style.title}>
              <img className={style.logo} src="/public/img/react.svg" />
              react-fetch-ssr
            </div>
            <p className={style.desc_text}>
              is a simple and lightweight React server-side rendering solution that abstracts the complexities of server-side rendering
            </p>
          </div>
          <div className={style.stats_content}>
            <ul className={style.content_limit}>
              <li className={style.row}>
                <div className={style.name}>
                  <img className={style.icon} src="/public/img/like.png" /> Votes:
                </div>
                <div className={style.votes}>
                  1892
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
            <div className={style.button}>
              <img className={style.icon_button} src="/public/img/vote.png" /> Vote
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Landing;
