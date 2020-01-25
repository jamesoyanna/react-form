import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetail extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values } = this.props;
        return (
          <MuiThemeProvider>
            <React.Fragment>
              <AppBar title="Enter User Details" />
              <TextField
                hintText="Enter Your First name"
                floatingLabelText="First Name"
                //onChange={handleChange("First Name")}
                //defaultValue={values.firstName}
              />
              <br />
              <TextField
                hintText="Enter Your Last name"
                floatingLabelText="last Name"
                //onChange={handleChange("First Name")}
                //defaultValue={values.lastName}
              />
              <br />
              <TextField
                hintText="Enter Your Email"
                floatingLabelText="Email"
               // onChange={handleChange("email")}
                //defaultValue={values.email}
              />
              <br />
              <RaisedButton
               lable="Continue"
               primary = {true}
               style = {styles.button} 
               onClick = {this.continue}
              /> 
            </React.Fragment>
          </MuiThemeProvider>
        );
    }
}

const styles = {
button:{
nargin : 15
}
 }

export default FormUserDetail;
