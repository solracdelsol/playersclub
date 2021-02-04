import { connect } from 'react-redux';
import PlayerIndex from './player_index';
import { fetchPlayerProfile, clearAll } from '../../actions/sport_actions';

const mapStateToProps = state => ({
  playerProfile: state.sports.playerProfile,
});

const mapDispatchToProps = dispatch => ({
  fetchPlayerProfile: (sportTrial, player_id) =>
    dispatch(fetchPlayerProfile(sportTrial, player_id)),
  clearAll: () => dispatch(clearAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerIndex);
