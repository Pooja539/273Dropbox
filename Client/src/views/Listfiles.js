import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as fileuploadservice from '../_services/fileuploadservice';
//import ImageGridList from "./ImageGridList";
//import TextField from 'material-ui/TextField';
//import Typography from 'material-ui/Typography';
import * as listfileaction from '../_actions/listfileaction';
//import {SelectableList} from 'material-ui/SelectableList';

class Listfiles extends React.Component {
    
    constructor(props) {
        super(props);
    }
    /*Listfiles = (event) => {

        //const payload = new FormData();
        //payload.append('mypic', event.target.files[0]);
        console.log("inside listfiles");
        //console.log(payload.fieldName);
         const { dispatch } = this.props;
       listfileaction.listfiles();


    };*/
    render() {
            const {item} = this.props;
            const { listoffiles  } = this.props;
        return (

            <div>
            <br/>
            <br/>

            <button className="btn btn-primary" onClick={() => {
                                this.props.addTodoNew()
                            }}>My files</button>

            <div className="card-body">
                          
                {this.props.fileList.length > 0 ? 

                    this.props.fileList.map((file) => {

                        return ( <div> {file}</div>);
                    })
                    
                    : ''}
                
              
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
export default connect(mapStateToProps,mapDispatchToProps)(Listfiles); 
