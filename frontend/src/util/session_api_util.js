import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = userData => {
  return axios.post('/api/users/register', userData);
};

export const login = userData => {
  return axios.post('/api/users/login', userData);
};

export const demoUserLogin = () =>
  axios.post({
    method: "POST",
    url: "api/users/login",
    data: {
      user: {
        username: "DemoUser",
        password: "123456",
        email: "DemoUser@demoemail.com",
      },
  },
});

