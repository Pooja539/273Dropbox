import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Fileupload from './Fileupload';
import Listfiles from './Listfiles';

class HomePage extends React.Component {

    render() {
        return (
        <div className="container">
  		<img src={require('../Dropbox.png')} style={{width: 100, height: 100, align: 'left'}}/><h1> Dropbox </h1>
        <div >
            <Fileupload/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        </div>
        
    );
    }
}



export {HomePage as HomePage};