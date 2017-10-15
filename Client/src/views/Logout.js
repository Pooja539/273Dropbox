import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class Logout extends React.Component {



handleLogout(){
	userActions.logout();
};
    render() {
        return (
            <div>
            <button className="btn btn-primary" onClick= {()=>this.handleLogout()}>Logout</button>
        	</div>
);
        }

}

export default Logout;