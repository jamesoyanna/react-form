import React, { Component } from 'react';

export class FormPersonalDetail extends Component {
    render() {
         continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };

       back = e =>{
        e.preventDefault();
        this.props.prevStep();
    };
        return (
          <MuiThemeProvider>
            <React.Fragment>
              <AppBar title="Enter User your Personal Details" />
              <TextField
                hintText="Enter Your occupation"
                floatingLabelText="occupation"
                //onChange={handleChange("occupation")}
                //defaultValue={values.occupation}
              />
              <br />
              <TextField
                hintText="Enter Your city"
                floatingLabelText="city"
                //onChange={handleChange("city")}
                //defaultValue={values.city}
              />
              <br />
              <TextField
                hintText="Enter Your bio"
                floatingLabelText="bio"
                // onChange={handleChange("bio")}
                //defaultValue={values.bio}
              />
              <br />
              <RaisedButton
                lable="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
              />
            <RaisedButton
                lable="Back"
                primary={false}
                style={styles.button}
                onClick={this.back}
              />

            </React.Fragment>
          </MuiThemeProvider>
        );
    }
}

export default FormPersonalDetail;
