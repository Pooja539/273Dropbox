import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Fileupload from './Fileupload';

class HomePage extends React.Component {

    render() {
        return (
        <div class="container">
  
       
        <div className="col-md-6">
            <Fileupload/>
        
        </div>
        </div>
        
    );
    }
}



export {HomePage as HomePage};