import React from 'react';

const AppComponent = function () {
  return <div>Welcome to my app 2222!</div>;
};

// class AppComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       message: 'Hello everybody!'
//     };
//   }
//   render() {
//     return <div>{this.state.message}</div>;
//   }
// };


// class AppComponent extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       message: props.foooo
//     };
//   }
//   render() {
//     return <div>{this.state.message}</div>;
//   }
// };

// class AppComponent extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       message: props.foooo
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState({
//       message: 'Ouch, that hurt!'
//     });
//   }
//   render() {
//     return <button onClick={this.handleClick}>{this.state.message}</button>;
//   }
// };

export default AppComponent;
