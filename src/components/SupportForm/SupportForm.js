import React from "react";
import styles from "./SupportForm.module.scss";
import { Control } from "../Control/Index";

export class SupportForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      comment: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      "UserName is: " + this.state.userName + ", comment: " + this.state.comment
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <h2>Please write your request</h2>
        <form onSubmit={this.handleSubmit}>
          <Control
            className={styles.control}
            inputType="input"
            labelText="UserName"
            type="text"
            name="userName"
            onChange={this.handleInputChange}
            required
          ></Control>
          <Control
            className={styles.control}
            inputType="textarea"
            labelText="Comment"
            //name="comment"
            onChange={this.handleInputChange}
            required
          ></Control>
          <button className={styles.submitBtn}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
