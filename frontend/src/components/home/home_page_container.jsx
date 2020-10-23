import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";
import HomePage from "./home_page.jsx";
import { fetchArticles } from "../../actions/article_actions";
import { fetchGameScore, fetchGameSchedule } from "../../actions/sport_actions";
import keys from "../../config/src_keys";

const msp = (state) => ({
  mlb: state.sports.mlb,
  nba: state.sports.nba,
  nhl: state.sports.nhl,
  sports: state.sports,
  currentUser: state.session.isAuthenticated,
  user: state.session.user,
  articles: state.articles,
});

const mdp = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    logout: () => dispatch(logout()),
    fetchGameScore: (sportTrial, event_id, key) =>
      dispatch(fetchGameScore(sportTrial, event_id, key)),
    mlbScheduleObj: (date) =>
      dispatch(fetchGameSchedule(keys.MLBTrial, date, keys.MLBkey)),
    nbaScheduleObj: (date) =>
      dispatch(fetchGameSchedule(keys.NBATrial, date, keys.NBAkey)),
    nhlScheduleObj: (date) =>
      dispatch(fetchGameSchedule(keys.NHLTrial, date, keys.NHLkey)),
    nflScheduleObj: (yyyy) =>
      dispatch(fetchGameSchedule(keys.NFLTrial, yyyy, keys.NFLkey)),
    fetchArticles: () => dispatch(fetchArticles(keys.articleKey)),
  };
};

export default connect(msp, mdp)(HomePage);
