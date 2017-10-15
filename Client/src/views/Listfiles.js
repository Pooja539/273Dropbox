import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as fileuploadservice from '../_services/fileuploadservice';
//import ImageGridList from "./ImageGridList";
//import TextField from 'material-ui/TextField';
//import Typography from 'material-ui/Typography';
import * as listfileaction from '../_actions/listfileaction';
//import {SelectableList} from 'material-ui/SelectableList';
import DownloadLink from 'react-download-link';
import Navpage from './Navpage';
import Logout from './Logout';

class Listfiles extends React.Component {
    
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.addTodoNew()
    }


    render() {
            const {item} = this.props;
            const { listoffiles  } = this.props;
        return (
            <div style={{backgroundColor: 'powderblue',height:500}}>
            <div class="row">
            <div className="col-sm-6">
            <Navpage/>
            </div>
            <div className="col-sm-6">
            <div className="card-body">         
                {this.props.fileList.length > 0 ? 
                    this.props.fileList.map((file) => {
                        return ( <div>
                            <button onClick= ""><img src={require('../Star.png')}/></button> 
                            <DownloadLink
                                filename={file}
                                label= {file}
                                />
                            </div>);
                    })
                    
                    : <div><h1>You are Not logged In</h1></div>

                }
                 </div>
                 </div>
               </div>
                <Logout/>
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
/*<button className="btn btn-primary" onClick={() => {
                                this.props.addTodoNew()
                            }}>My files</button>*/