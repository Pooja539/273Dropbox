import React, {Component} from 'react';
import './App.css';
import * as API from './api/API';
import ImageGridList from "./ImageGridList";
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

class Fileupload extends Component {

    handleFileUpload = (event) => {

        const payload = new FormData();
        payload.append('mypic', event.target.files[0]);
        //console.log(payload.fieldName);
        API.uploadFile(payload)
            .then((status) => {
                if (status === 204) {
                    API.getImages()
                        .then((data) => {
                            this.setState({
                                images: data
                            });
                        });
                }
            });

    };
    constructor() {
        super();
        this.state = {
            images: []
        };
    }

    componentDidMount() {
        API.getImages()
            .then((data) => {
                console.log(data);
                this.setState({
                    images: data
                });
            });
    };

    render() {
        return (
            <div >
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
                    onChange={this.handleFileUpload}
                />
                <ImageGridList images={this.state.images}/>
            </div>

        );
    }
}

export default App;
