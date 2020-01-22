/* eslint-disable require-jsdoc */
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    // 1
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    // 3
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // 5
    clearInterval(this.timerID);
  }

  tick() {
    // 4 (tick is a custom method)
    this.setState({
      // here's how to update state!
      // (doesn't erase other state variables, only merges into this.state.date)
      date: new Date()
    }); // // Wrong: (because this.props and this.state are asynchronously updated)
    // this.setState({
    //   counter: this.state.counter + this.props.increment,
    // });
    // // Correct: (because of reason mentioned above)
    // this.setState((state, props) => ({
    //   counter: state.counter + props.increment
    // }));
  }

  render() {
    // 2 (updates diff when this.setState is called)
    return React.createElement("div", null, React.createElement("h1", null, "Hello, world!"), React.createElement("h2", null, "It is ", this.state.date.toLocaleTimeString(), "."));
  }

}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    }; // This binding is necessary to make `this` work in the callback
    // More info: https://reactjs.org/docs/handling-events.html

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return React.createElement("button", {
      onClick: this.handleClick
    }, this.state.isToggleOn ? 'ON' : 'OFF');
  }

}

ReactDOM.render(React.createElement("div", null, React.createElement(Clock, null), React.createElement(Toggle, null)), document.getElementById('root'));
