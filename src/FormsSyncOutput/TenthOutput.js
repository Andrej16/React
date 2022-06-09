import React from "react";

export class TenthOutput extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const tenthValue = this.props.tenthValue;

        return (
            <fieldset>
              <legend>Calculated tenth value:</legend>
              <input value={tenthValue} />
            </fieldset>
          );    
    }
}