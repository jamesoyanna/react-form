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

         back = e => {
           e.preventDefault();
           this.props.prevStep();
         };

         render() {
           const {
             value: { firstName, lastName, email, occupation, city, bio }
           } = this.props;
           return (
             <MuiThemeProvider>
               <React.Fragment>
                 <AppBar title="Confirm User Details " />
                 <List>
                   <ListItem
                     primaryText="first Name"
                     secondaryText={firstName}
                   />
                   <ListItem primaryText="last Name" secondaryText={lastName} />
                   <ListItem primaryText="email" secondaryText={email} />
                   <ListItem
                     primaryText="occupation"
                     secondaryText={occupation}
                   />
                   <ListItem primaryText="city" secondaryText={city} />
                   <ListItem primaryText="bio" secondaryText={bio} />
                 </List>
                 <br />
                 <RaisedButton
                   lable="Confirm & Continue"
                   primary={true}
                   style={styles.button}
                   onClick={this.continue}
                 />
                 <RaisedButton
                   lable="Back"
                   primary={false}
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
