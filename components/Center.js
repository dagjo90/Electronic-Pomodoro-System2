
import React from "react";

class Center extends React.Component {
  render() {
    return (
      <div className="center">
      <div className="timerbox">
      <p className="timer">

              {this.props.value.minutes < 10
                ? "0" + this.props.value.minutes
                : this.props.value.minutes}
              :
              {this.props.value.seconds < 10
                ? "0" + this.props.value.seconds
                : this.props.value.seconds}


</p>
</div>



          <div className="buttons">

            <button className="plus"

              disabled={this.props.stop}
              onClick={this.props.addclick}
            >
              +
            </button>



            <button
              className="toggle"
              onClick={this.props.handleStart}
            >
              {this.props.value.clicked ? "Reset" : "Start"}
            </button>


            <button
              className="minus"
              onClick={this.props.removeclick}
            >
              -
            </button>





      </div>
      </div>
    );
  }
}

export default Center;
