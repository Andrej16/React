import React from "react";

export class FormToJson extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
        field1: 'Shylin',
        field2: 'Andrii',
        field3: 'Andriich',
        json: ''
    };

    this.handleTextChanged = this.handleTextChanged.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleTextChanged(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
        [name]: target.value,
    });
  }

  handleOnSubmit(event) {
    const value = this.state;

    const printResult = JSON.stringify(value, (key, value) => {
        if(key == 'json'){
            return undefined;
        }
        return value;
    }, '\t');

    this.setState({ json: printResult });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <label>
            Field 1:
            <input
              name="field1"
              value={this.state.field1}
              onChange={this.handleTextChanged}
            ></input>
          </label>
        </p>
        <p>
          <label>
            Field 2:
            <input
              name="field2"
              value={this.state.field2}
              onChange={this.handleTextChanged}
            ></input>
          </label>
        </p>
        <p>
          <label>
            Field 3:
            <input
              name="field3"
              value={this.state.field3}
              onChange={this.handleTextChanged}
            ></input>
          </label>
        </p>
        <p>
            <textarea value={this.state.json} rows="10" cols="33"></textarea>
        </p>
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
