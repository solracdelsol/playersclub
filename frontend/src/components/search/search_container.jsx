import { connect } from 'react-redux';
import Search from './search';
import { fetchAll } from '../../actions/sport_actions';


const msp = state => {
    return ({
    sports: Object.values(state.sports)
    })
}

const mdp = dispatch => ({

    fetchAll: (trial, eventId, key) => dispatch(fetchAll(trial, eventId, key))
});

export default connect(msp, mdp)(Search);