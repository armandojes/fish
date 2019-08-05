import axios from 'axios';

const base_url = 'http://localhost/api';

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
  }
}

export default api;
