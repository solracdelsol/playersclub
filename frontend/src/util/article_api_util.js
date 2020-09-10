import axios from 'axios';


export const fetchArticles = (articleKey) =>
  axios.get(
    `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${articleKey}`
  );

