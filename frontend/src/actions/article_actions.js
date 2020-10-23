import * as APIUTIL from "../util/article_api_util";

export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const CLEAR_ALL_ARTICLES = "CLEAR_ALL_ARTICLES";

export const receiveAllArticles = (articles) => ({
  type: RECEIVE_ALL_ARTICLES,
  articles,
});

export const clearAllArticles = () => ({
  type: CLEAR_ALL_ARTICLES,
});

export const fetchArticles = () => (dispatch) =>
  APIUTIL.fetchArticles().then((articles) =>
    dispatch(receiveAllArticles(articles))
  );
