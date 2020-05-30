import React, { Component } from "react";

export class Showcaser extends Component {
  constructor(props) {
    super(props);
    this.timerIndex = -1;
    this.state = {
      counter: 0,
      withAno: false,
    };
  }

  startCounter = () => {
    this.timerIndex = setInterval(() => {
      if (this.state.counter === 10000) {
        this.endTimer();
        return false;
      }
      this.setState({ ...this.state, ...{ counter: this.state.counter + 1 } });
    }, 0);
  };

  endCounter = () => {
    if (this.timerIndex !== -1) {
      clearInterval(this.timerIndex);
      this.timerIndex = -1;
    }
  };

  resetCounter = () => {
    this.endTimer();
    this.setState({ ...this.state, ...{ counter: 0 } });
  };

  toggleAno = () => {
    this.setState({ ...this.state, ...{ withAno: !this.state.withAno } });
  };

  showMeLog = (event) => {
    console.log("mindless", event, new Date().getTime());
  };

  withoutANO = () => {
    return (
      <>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
        <button onClick={this.showMeLog}>Noop</button>
      </>
    );
  };

  withANO = () => {
    return (
      <>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
        <button onClick={(event) => this.showMeLog(event)}>Noop</button>
      </>
    );
  };

  render() {
    return (
      <div>
        <p>Counter : {this.state.counter}</p>
        <p>withANO : {this.state.withAno.toString()}</p>
        <button onClick={this.startCounter}>Start Counter </button>
        <button onClick={this.endCounter}>End Counter </button>
        <button onClick={this.resetCounter}>Reset Counter </button>
        <button onClick={this.toggleAno}>Toggle ano </button>
        <hr />
        <hr />
        {this.state.withAno ? this.withANO() : this.withoutANO()}
      </div>
    );
  }
}
