import React, { Component } from "react";
import Nav from "../Nav";
import Main from "../Main";
import Footer from "../Footer";

class MainScreen extends Component {
  //
  //State
  //
  constructor() {
    super();
    this.state = { status: true };
  }
  render() {
    return (
      <div>
        <Nav />
        <p>I am {!this.state.status && "not"} using a state</p>
        <Main />
        <Footer />
      </div>
    );
  }
}

// const MainScreen = () => {
//   return (
//     <div>
//       <Nav />
//       <Main />
//       <Footer />
//     </div>
//   );
// };

export default MainScreen;
