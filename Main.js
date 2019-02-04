import React from "react";
import ReactDOM from "react-dom";

import Center from "./components/Center.js";
import Logo from "./components/Logo.js";



class Main extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    clicked: false,
    minutes: 25,
    seconds: 0,
    baseTime: 25
  };

  this.handleStartClick = this.handleStartClick.bind(this);
  this.handleRemoveSecondsClick = this.handleRemoveSecondsClick.bind(this);
  this.add = this.add.bind(this);
  this.remove = this.remove.bind(this);
}

handleStartClick() {
  if (this.state.clicked === false) {
    this.setState(
      {
        clicked: true,
        baseTime: this.state.minutes
      },
      function() {
        this.timerSeconds = setInterval(this.handleRemoveSecondsClick, 1000);
      }
    );
  } else {
    clearInterval(this.timerSeconds);
    this.setState({
      clicked: false,
      minutes: this.state.baseTime,
      seconds: 0
    });
  }
}

handleRemoveSecondsClick() {
  if (this.state.minutes === 0 && this.state.seconds === 0) {
    clearInterval(this.timerSeconds);
    alert("Achievement unlock : Working for " + this.state.baseTime +" straight minutes !");
    this.setState({
      clicked: false,
      minutes: this.state.baseTime,
      seconds: 0
    });

  } else {

  if (this.state.seconds === 0) {
    this.state.minutes -= 1;
    this.state.seconds = 60;
  }

  this.setState({
    seconds: (this.state.seconds -= 1)
  });
}}

add() {
  if (!this.state.clicked) {
    if (this.state.minutes >= 99) {
      this.setState({
        minutes : 0
      });
    }else {
    this.setState({
      minutes: (this.state.minutes += 1)
    });}
  }
}
remove() {
  if (!this.state.clicked) {
    if (this.state.minutes <= 0) {
      this.setState({
        minutes: 99
      });
    } else {
    this.setState({
      minutes: (this.state.minutes -= 1)
    });}
  }
}
render() {
  return (
    <div className="main">
      <Logo />
      <Center
        handleStart={this.handleStartClick}
        value={this.state}
        addclick={this.add}
        removeclick={this.remove}
      />

    </div>
  );
}
}

export default Main;
