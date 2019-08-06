import React, {useEffect, useState} from 'react';
import style from './style'
import Container from '../../components/container'
import Item from './components/item'
import api from '../../../api';


function Admin (props){

  const [items, set_items] = useState(null);

  useEffect(() => {
    async function fetch_items () {
      const response = await api.get_list();
      set_items(response.items);
    }
    fetch_items();
  },[]);


  async function handle_reset(){
    const response = await api.reset();
    alert(response.status);
  }

  return (
    <section>
      <Container>
        <div className={style.list_container}>
          <div className={style.button_container}>
            <div className={style.button} onClick={handle_reset}>
              reset
            </div>
          </div>
          {!items && (<div className={style.loading}>Loading...</div>)}
          {items && (
            items.map((item) => <Item {...item} key={item.id}/>)
          )}
        </div>
      </Container>
    </section>
  )
}

export default Admin;
