import { services } from '../../config/config';
import axios from 'axios';

export const GET_CURRENT_USER = 'GET_CURRENT_USERE'
export const GET_CURRENT_USER_BY_TOKEN = 'GET_CURRENT_USER_BY_TOKEN'

export const getCurrentUser = (id, password) => (dispatch) => {
  const instance = axios.create({ baseURL: services.api });
console.log(id, password);
  const user = instance.post(`/login`, { id, password })
    .then( res =>
      dispatch ({
        type: GET_CURRENT_USER,
        user: res.data.user,
        token: res.data.token,
      })
    );
}

export const getCurrentUserByToken = token => (dispatch) => {
  const instance = axios.create({ baseURL: services.api });
  const user = instance.get(`/token`)
    .then( res => {
      console.log(JSON.srtingify(res));
      return(
        dispatch ({
          type: GET_CURRENT_USER_BY_TOKEN,
          user: res.data,
        })
      )
    }
    )
    .catch(err => alert(err));
}
