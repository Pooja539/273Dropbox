import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as fileuploadservice from '../_services/fileuploadservice';
import { history } from '../_helpers';
//import { listfileAction } from '../_actions';
import * as listfileaction from '../_actions/listfileaction';
class Fileshare extends React.Component {
constructor(props) {
        super(props);
		this.state = {
            sharing_email: '',
        };
            this.handleChange = this.handleChange.bind(this);
        }
handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });

    }
handleShare()
{
    //const { email, password } = this.state;
    const { dispatch } = this.props;
	const { sharing_email } = this.state;
	console.log(sharing_email);
	const payload = this.props.sharedfilename;
       console.log(payload);
       console.log("after payload"+sharing_email);
        console.log("inside handleShare fileshare Component");
        if (payload && sharing_email) {
            console.log("inside the if loop");
            dispatch(listfileaction.sendfileforshare(payload, sharing_email));
        }
        
}
    
render() {
	const { sharing_email} = this.state;
        return (
        	<div>
        	<h4> Share with: </h4>
        	<input type="email" placeholder="Enter email here" className="mm-popup__input" name="sharing_email" value={sharing_email} onChange={this.handleChange}/>;
        	<h4> File: </h4><input type="text" value={this.props.sharedfilename}/>;
        	<button className="btn btn-primary" onClick= {()=>this.handleShare()}>Share</button>
   			</div>

   );
}
}
function mapStateToProps(data) {
    let sharedfilename = data.listoffiles.filename;
    return {sharedfilename};
}
/*function mapDispatchToProps(dispatch) {
    return {
        sendfileforshare: (data) => dispatch(listfileaction.sendfileforshare(data))
    };
}*/
export default connect(mapStateToProps)(Fileshare); 
