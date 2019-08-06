import axios from 'axios';

const base_url = 'https://react-ssr.000webhostapp.com/api';

const connect = async (config) => {
  config.url = `${base_url}/${config.url}`;

  const response = await axios(config);
  return response.data;
}

const api = {
  save (data){
    return connect({
      method: 'post',
      url: '/save',
      data,
    });
  },
  get_state (){
    return connect({
      'method': 'get',
      'url': '/state',
    })
  },
  get_list(){
    return connect({
      url: '/list',
      method: 'get',
    });
  },
  reset(){
    return connect({
      url: '/reset',
      method: 'get',
    });
  }

}

export default api;
