import React, {Component} from 'react';
import * as fileuploadservice from '../_services/fileuploadservice';
//import ImageGridList from "./ImageGridList";
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

class Listfiles extends React.Component {

    handleFileList = (event) => {

        const payload = new FormData();
        payload.append('mypic', event.target.files[0]);
        console.log("inside handleUpoad");
        //console.log(payload.fieldName);
        fileuploadservice.uploadFile(payload)
            .then((status) => {
                if (status === 204) {
                    console.log("file uploaded");
                }
            });

    };

   /* componentDidMount() {
        fileuploadservice.getImages()
            .then((data) => {
                console.log(data);
                this.setState({
                    images: data
                });
            });
    };*/

    render() {
        return (
            <div >
            <img src="./src/Dropbox.png"/>
                <Typography
                    align={'center'}
                    type="display3"
                >
                Your Files
                </Typography>
                <TextField
                    className={'fileupload'}
                    type="file"
                    name="mypic"
                    onChange={this.handleFileList}
                />
                  { /*. //<ImageGridList images={this.state.images}/>*/}
            </div>

        );
    }
}

export default Fileupload;
