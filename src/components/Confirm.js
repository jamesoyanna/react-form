import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import {List, ListItem} from "material-ui/List";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { value:{firstName, lastName,email, occupation,city,bio}} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Details " />
          <br />
          <RaisedButton
            lable="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    nargin: 15
  }
};

export default Confirm;
