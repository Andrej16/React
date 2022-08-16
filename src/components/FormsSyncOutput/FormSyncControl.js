import React from "react";
import { TenthOutput } from "./TenthOutput";
import { HundredthOutput } from "./HundredthOutput";
import { FormSyncInput } from "./FormSyncInput";

export class FormSyncControl extends React.Component {
  constructor(props) {
    super(props);

    this.handleFormSyncInputChange = this.handleFormSyncInputChange.bind(this);
    this.state = { sourceValue: 0 };
  }

  handleFormSyncInputChange(source) {
    this.setState({
      sourceValue: source,
    });
  }

  tryConvert(source) {
    const input = parseInt(source);
    if (Number.isNaN(source)) {
      return "";
    }
    return input;
  }

  render() {
    const clearedSource = this.tryConvert(this.state.sourceValue);
    const tenthValue = clearedSource * 0.5;
    const hundredthValue = clearedSource * 0.05;

    return (
      <div>
        <FormSyncInput
          sourceValue={this.state.sourceValue}
          onSourceChange={this.handleFormSyncInputChange}
        />

        <TenthOutput tenthValue={tenthValue} />
        <HundredthOutput hundredthValue={hundredthValue} />
      </div>
    );
  }
}
