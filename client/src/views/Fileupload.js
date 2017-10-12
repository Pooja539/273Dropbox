import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as fileuploadservice from '../_services/fileuploadservice';
import * as listfileaction from '../_actions/listfileaction';
import DownloadLink from 'react-download-link';
//import {listfileaction} from '../actions/listfileaction';
//import ImageGridList from "./ImageGridList";
//import TextField from 'material-ui/TextField';
//import Typography from 'material-ui/Typography';
import Navpage from './Navpage';

class Fileupload extends React.Component {

    handleFileUpload = (event) => {

        const payload = new FormData();
        payload.append('mypic', event.target.files[0]);
        console.log("inside handleUpoad");
        //console.log(payload.fieldName);
        fileuploadservice.uploadFile(payload)
            .then((status) => {
                if (status === 204) {
                    console.log("file uploaded");
                   this.props.addTodoNew();
                }
            });

    };
    handleSubmit = (event) =>{
       // const payload = {file};
        console.log("inside handleSubmit for starfile");
        //console.log(payload.fieldName);
        fileuploadservice.starfile()
            .then((status) => {
                if (status === 204) {
                    console.log("file starred in Listfiles.js");
                   this.props.addTodoNew();
                }
            });
    };

    render() {
        return (
            <div >
                
                 <div class="row">
                <div className="col-sm-6">
                <Navpage/>
                </div>
                 <div className="col-sm-6">
                 <h1> Upload your files here </h1>
                
                <input
                    className={'fileupload'}
                    type="file"
                    name="mypic"
                    onChange={this.handleFileUpload}
                />
                  <div className="card-body">
                          
                {this.props.fileList.length > 0 ? 

                    this.props.fileList.map((file) => {

                        return ( <div>
                        <button onClick= "{this.handleSubmit}"><img src={require('../Star.png')}/></button> 
                            <DownloadLink
                                filename={file}
                                label= {file}
                                />
                                <br/>
                        </div>);
                    })
                    
                    : ''}
                
              </div>
              </div>
                 </div>
            </div>

        );
    }
}
function mapStateToProps(data) {
    let fileList = [];
    console.log("in component ----- ");
    if(data.listoffiles.files !== undefined) {
        fileList = data.listoffiles.files.files;
        console.log(data.listoffiles.files.files);  
        
    }
    return {fileList};
}
function mapDispatchToProps(dispatch) {
    return {
        addTodoNew : () => dispatch(listfileaction.listfiles())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Fileupload); 

