import React, { Component } from "react";
import InputDate from "elements/Form/InputDate";

export default class Example extends Component {
    state = {
          value: {
              startDate: new Date(),
              endDate: new Date(),
              key: "selection"
          }
        };

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    render(){
        return(
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{height: "100vh"}}>
                     <InputDate
                        max={30}
                        name="value"
                        isSuffixPlural
                        value={this.state.value}
                        onChange={this.handleChange} />
                </div>
            </div>
        );
        
    }
}