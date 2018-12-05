import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Image from "./components/Image";

class App extends Component {
  state = {
    showImage: false
  };

  fileUploaHandler = () => {
    this.setState({ showImage: true });
  };

  render() {
    let inputImage = null;
    let outputImage = null;

    if (!this.showImage) {
      inputImage = <Form clicked={this.fileUploaHandler} />;
    } else {
      outputImage = <Image />;
    }

    return (
      <div className="App">
        <Title />
        {inputImage}
        {outputImage}
      </div>
    );
  }
}

export default App;
