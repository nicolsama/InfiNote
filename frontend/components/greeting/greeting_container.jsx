import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting'


const msp = ({ session, entities: { users } }, ownProps) => {
    debugger;
    return {
        currentUser: users[session.id],
        linkPath: ownProps.location.pathname
    };
};


const mdp = (dispatch) => ({
    logout: () => dispatch(logout())
});


export default connect(msp, mdp)(Greeting);

