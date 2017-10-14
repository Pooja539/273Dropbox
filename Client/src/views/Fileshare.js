import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as fileuploadservice from '../_services/fileuploadservice';
class Fileshare extends React.Component {


handleShare(file,this.input.value)
{
	
	const payload = file;
       console.log(payload);
        console.log("inside handleShare fileshare Component");
        //console.log(payload.fieldName);
        fileuploadservice.sharefile(payload)
            .then((status) => {
                if (status === 204) {
                    console.log("file starred in Listfiles.js");
                   this.props.addTodoNew();
                }
            });
    
};

render() {
        return (
        	<div>
        	<h4> Share with: </h4>
        	<input type="text" placeholder="Enter email here" className="mm-popup__input" name="sharing email" value="sharing email"/>;
        	<h4> File: </h4> {file}
        	<button className="btn btn-primary" onClick= {()=>this.handleShare(file,this.input.value)}>Share</button>
   			

   );
    }
