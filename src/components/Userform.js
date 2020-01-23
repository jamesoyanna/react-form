import React, { Component } from 'react';

export class Userform extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: ""
    }

    //Proceed to next step
    nextStep = ()=>{
                     const { step } = this.state;
                     this.setState({
                       step: step + 1
                     });

                     //Go bavk to previous step
                     nextStep = () => {
                       const { step } = this.state;
                       this.setState({
                         step: step + 1
                       });
                     };
                   } 
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Userform;
