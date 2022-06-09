import React from "react";

export class FormSyncInput extends React.Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onSourceChange(event.target.value);
    }

    render(){
        const sourceValue = this.props.sourceValue;

        return (
            <fieldset>
              <legend>Enter source value:</legend>
              <input value={sourceValue} onChange={this.handleChange}/>
            </fieldset>
          );    
    }
}