import React from "react";

// Import the Artyom library
import Artyom from "artyom.js";

// Import the previously created class to handle the commands from another file
import ArtyomCommandsManager from "./ArtyomCommends";
import { Input, Button, Row, Col, Label } from "reactstrap";

// Create a "globally" accesible instance of Artyom
const Jarvis = new Artyom();

export class Fruits extends React.Component {
  constructor(props, context) {
    super(props, context);

    // Add `this` context to the handler functions
    this.startAssistant = this.startAssistant.bind(this);
    this.stopAssistant = this.stopAssistant.bind(this);
    this.speakText = this.speakText.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);

    // Prepare simple state
    this.state = {
      artyomActive: false,
      textareaValue: "",
      artyomIsReading: false,
      name: "",
      disable: false,
    };

    // Load some commands to Artyom using the commands manager
    let CommandsManager = new ArtyomCommandsManager(Jarvis);
    CommandsManager.loadCommands();
  }

  startAssistant() {
    let _this = this;
    this.setState({ ...this.state, disable: true });
    console.log("Artyom succesfully started !");

    Jarvis.initialize({
      lang: "en-GB",
      debug: true,
      continuous: true,
      soundex: true,
      listen: true,
    })
      .then(() => {
        // Display loaded commands in the console
        console.log(Jarvis.getAvailableCommands());

        Jarvis.say(
          `hello ${this.state.name},i am jarvish. how can i help you?`
        );

        _this.setState({
          artyomActive: true,
        });
      })
      .catch((err) => {
        console.error("Oopsy daisy, this shouldn't happen !", err);
      });
  }

  stopAssistant() {
    let _this = this;

    Jarvis.fatality()
      .then(() => {
        console.log("Jarvis has been succesfully stopped");

        _this.setState({
          artyomActive: false,
        });
      })
      .catch((err) => {
        console.error("Oopsy daisy, this shouldn't happen neither!", err);

        _this.setState({
          artyomActive: false,
        });
      });
  }

  speakText() {
    let _this = this;

    _this.setState({
      artyomIsReading: true,
    });

    // Speak text with Artyom
    Jarvis.say(_this.state.textareaValue, {
      onEnd() {
        _this.setState({
          artyomIsReading: false,
        });
      },
    });
  }

  handleTextareaChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="container-fluid">
        {!this.state.disable && (
          <Row className="mt-3">
            <Col md="4">
              <Label>Whats Your Name?</Label>
              <Input
                onChange={this.handleTextareaChange}
                placeholder="Name"
                className="mt-2"
              />
              <Row>
                <Col md="10"></Col>
                <Col md="2" className="mt-2">
                  <Button
                    className="btn-warning btn-sm"
                    onClick={this.startAssistant}
                    disabled={!this.state.name}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col md="4"></Col>
            <Col md="4"></Col>
          </Row>
        )}
        {this.state.disable && (
          <h3 className="text-danger text-center">Ask Me</h3>
        )}
      </div>
    );
  }
}
