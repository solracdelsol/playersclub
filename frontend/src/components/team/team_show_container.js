import { connect } from 'react-redux';
import TeamShow from './team_show_index';
import { fetchPlayerProfile } from '../../actions/sport_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    teamProfile: state.sports.teamProfile,
    teamID: ownProps.match.params.id,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPlayerProfile: (sportTrial, player_id) =>
    dispatch(fetchPlayerProfile(sportTrial, player_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamShow);
