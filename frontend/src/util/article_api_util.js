import axios from 'axios';


export const fetchArticles = (articleKey) =>
  axios.get(
    `https://cors-anywhere.herokuapp.com/https://gnews.io/api/v4/top-headlines?token=${articleKey}&topic=sports&country=US&lang=en&q=NBA%20OR%20NHL%20OR%20MLB`
  );

