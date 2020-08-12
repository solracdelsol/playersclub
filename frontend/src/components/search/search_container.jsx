import { connect } from 'react-redux';
import Search from './search';
import {} from ''; //import fetchAllSports from action folder

const msp = state => ({
    //to be fixed
    sports: Object.values(state.sports)
});

const mdp = dispatch => ({
    fetchAllSports: () => dispatch(fetchAllSports())
});

export default connect(msp, mdp)(Search);