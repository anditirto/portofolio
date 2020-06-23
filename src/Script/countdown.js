import React from "react";
import "./countdown.css";

export default class Countdown extends React.Component {
  constructor(props) {
    super();
    // this.state = {
    //   button: "",
    // };

    //this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    this.countdownEvent("component did mount");
  }

  // handleButton = () => {
  //   console.log("clicked");
  //   this.props.onButtonClick(this.state.button);
  //   this.setState({ button: "" });
  // };

  // onChange = (e) => {
  //   this.setState({ button: e.target.value });
  // };

  buttonHide(){

  }

  countdownEvent(something) {
    //let end = new Date("06/25/2020 10:1 AM");
    let end = new Date("07/22/2020 18:26 ");

    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;
    let timer;
    let btnDisplay = document.getElementById("myBtn");
    function showRemaining() {
      let now = new Date();
      let distance = end - now;
      if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "EXPIRED!";
        btnDisplay.disabled= false;
        return;
      }
      let days = Math.floor(distance / _day);
      let hours = Math.floor((distance % _day) / _hour);
      let minutes = Math.floor((distance % _hour) / _minute);
      let seconds = Math.floor((distance % _minute) / _second);

      document.getElementById("countdown").innerHTML = days + "days ";
      document.getElementById("countdown").innerHTML += hours + "hrs ";
      document.getElementById("countdown").innerHTML += minutes + "mins ";
      document.getElementById("countdown").innerHTML += seconds + "secs";
      btnDisplay.disabled= true;
      console.log("disabled");
    }

    timer = setInterval(showRemaining, 1000);
    //console.log(document.getElementById("countdown").innerHTML = "EXPIRED!");
  }

  render() {
    return (
      <div>
        <div>
          <span id="countdown"></span>
        </div>
        <div className="btnEvent">
          <a href="https://pokemongolive.com/events/fest/2020" target="blank"><button id="myBtn" className="btn btn-primary btnStyle" >Go to Event</button></a>
        </div>
      </div>
    );
  }
}
