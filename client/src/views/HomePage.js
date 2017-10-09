import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Fileupload from './Fileupload';

class HomePage extends React.Component {

    render() {
        return (
        <div class="container">
        <div className="row">
       
        <div className="col-md-6">
            <Fileupload/>
        </div>
        </div>
        </div>
        
    );
    }
}


//const connectedHomePage = connect(mapStateToProps)(HomePage);
//export { connectedHomePage as HomePage };