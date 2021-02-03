import { connect } from 'react-redux';
import TeamIndex from './team_index';
import { fetchTeamProfile, clearAll } from '../../actions/sport_actions';

const mapStateToProps = state => ({ teamProfile: state.teamProfile });

const mapDispatchToProps = dispatch => ({
  fetchTeamProfile: (sportTrial, team_id) =>
    dispatch(fetchTeamProfile(sportTrial, team_id)),
  clearAll: () => dispatch(clearAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamIndex);
