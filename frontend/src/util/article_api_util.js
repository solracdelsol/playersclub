import axios from 'axios';


export const fetchArticles = () =>
  axios.get(
    'api/proxy/articles'
  );

