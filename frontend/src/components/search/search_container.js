import { connect } from "react-redux";
import Search from "./search";
import { fetchGameScore, fetchGameSchedule } from "../../actions/sport_actions";

const msp = (state) => ({
  sports: state.sports,
});

const mdp = (dispatch) => ({
  fetchGameScore: (sportTrial, event_id) =>
    dispatch(fetchGameScore(sportTrial, event_id)),
  scheduleObj: (sportTrial, date) => dispatch(fetchGameSchedule(sportTrial, date)),
});

export default connect(msp, mdp)(Search);
