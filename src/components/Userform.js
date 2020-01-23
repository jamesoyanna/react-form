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
                     prevtStep = () => {
                       const { step } = this.state;
                       this.setState({
                         step: step - 1
                       });
                     };
                 // Handle fields changes
                 handleChange = input =>e=>{
                     this.setState({[input]:e.target.value});
                 }


                   } 
    render() {

        const {step} = this.state;
        const {firstName, lastName, email, occupation, city, bio} = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };
        return (
            <div>
                
            </div>
        );
    }
}

export default Userform;
