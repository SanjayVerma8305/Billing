import axios from 'axios';

const api = {
  async getData() {
    const response = await axios.get('https://sumit.free.beeceptor.com/getuserinfo');
    return response.data;
  }
};

export default api;