import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked.")}}/>
      </React.Fragment>
    )
//    const greeting = "Hi, Tom"
//    const dom = <h1 className="foo">{greeting}</h1><input type="text" onClick={() => {console.log("I am clicked.")}}/>;
  }  
}
//class App extends Component {
//  render() {
//    return React.createElement(
//      "div",
//      null,
//      "Hello, world!!"
//    );
//  }  
//}
//function App() {
//  return (
//    <div>Hello world.</div>
//  );
//}

export default App;
