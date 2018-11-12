const Axios = require('axios');

const BASE_URL = 'https://products.pops.vn/api';
const API_KEY = '5b598a1f21e5ca2127b7ed7c';
const TOKEN_ID =
  'R7AlW5QgKVRLgb9QCqFyYdJ8KNlUJ517cKz8WuIyGtrqw0AFuWrFATp3PaGI75Oz';

const instance = Axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    'api-key': API_KEY
  }
});

const URL = {
  GET_CATEGORIES: '/v1/Categories',
  GET_VIDEO_LIST: '/v1/Categories'
};

export const getCategories = () => instance.get('/v1/Categories');

export const getVideoList = ({ id, limit, sortBy, orderBy, page }) => {
  return instance.get('/v1/Pages/fetchListVideo', {
    params: {
      id,
      limit,
      sortBy,
      orderBy,
      page
    }
  });
};
