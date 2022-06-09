import React from "react";

export class HundredthOutput extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const hundredthValue = this.props.hundredthValue;

        return (
            <fieldset>
              <legend>Calculated Hundredth Value:</legend>
              <input value={hundredthValue} />
            </fieldset>
          );    
    }
}