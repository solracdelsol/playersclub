import {
  RECEIVE_ALL_ARTICLES,
  CLEAR_ALL_ARTICLES,
} from "../actions/article_actions";

const ArticlesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_ARTICLES:
      return action.articles.data.articles;
    case CLEAR_ALL_ARTICLES:
      return {};
    default:
      return oldState;
  }
};

export default ArticlesReducer;
