import React, {useState, useEffect } from 'react';
import Landing from '../../components/landing';
import Readme from '../../components/readme';
import Circle from '../../components/circle';
import Modal from '../../components/modal';
import api from '../../../api'

function Default (){

  const [votes, set_votes] = useState(1891);
  const [modal, set_modal] = useState(false);
  const [finish, set_finish] = useState(false);

  useEffect(() => {
    async function connect () {
      const response = await api.get_state();
      if(response.state === 1) sucess();
    }

    connect();
  },[]);

  const sucess = () => {
    set_modal(false);
    set_votes(votes + 1);
    set_finish(true);
  }

  return (
    <div>
      {modal && (<Modal sucess={sucess} />)}
      <Header />
      <Circle />
      <Landing votes={votes} set_modal={set_modal} finish={finish} />
      <Readme />
    </div>
  )
}

export default Default;
