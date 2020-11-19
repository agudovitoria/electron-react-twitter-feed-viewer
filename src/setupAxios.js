import axios from 'axios';

const { REACT_APP_BASE_URL: BASE_URL, REACT_APP_BEARER_TOKEN: BEARER_TOKEN } = process.env;

const setupAxios = () => {
  // eslint-disable-next-line no-console
  console.log('Configuring axios...');
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.headers.common.Authorization = `Bearer ${BEARER_TOKEN}`;
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const extractError = (errors) => errors[0];
  const getPromiseRejectedForFirstErrorOf = (errors) => Promise.reject(extractError(errors));

  const onRejected = (response) => {
    if (response.errors) {
      return extractError(response.errors);
    }

    return response;
  };

  const onFulfilled = ({ data }) => {
    if (data.errors) {
      return getPromiseRejectedForFirstErrorOf(data.errors);
    }

    if (data.data) {
      return data.data;
    }

    return data;
  };

  axios.interceptors.response.use(onFulfilled, onRejected);
};

export default setupAxios;
