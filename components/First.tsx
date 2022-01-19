import * as React from "react";
let Logo ="webdev2.jpeg";
export default class FirstComponent extends React.Component <{}> {
  render() {
    return (
      <div>
        <h3>Building a Simple React Component with Typescript</h3>
        <div>
          <img height="250" width="400" src={Logo} /> 
        </div>
        <p>This "First" Component builds the React component in Typescript</p>
      </div>
    );
  }
}