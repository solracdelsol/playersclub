import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";
import HomePage from "./home_page.jsx";
import { fetchArticles } from "../../actions/article_actions";
import { fetchGameScore, fetchGameSchedule } from "../../actions/sport_actions";

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
    fetchGameScore: (sportTrial, event_id) =>
      dispatch(fetchGameScore(sportTrial, event_id)),
    scheduleObj: (sportTrial, date) => dispatch(fetchGameSchedule(sportTrial, date)),
    fetchArticles: (date) => dispatch(fetchArticles(date)),
  };
};

export default connect(msp, mdp)(HomePage);
