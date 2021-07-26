import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {
  Row,
  Col,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faSearch } from "@fortawesome/free-solid-svg-icons";
import Speech from "react-speech";

const Voice = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const textstyle = {
    play: {
      hover: {
        color: "blue",
        backgroundColor: "white",
      },
      button: {
        width: "34",
        height: "34",
        cursor: "pointer",
        pointerEvents: "none",
        outline: "none",
        backgroundColor: "white",
        border: "none",
      },
    },
    stop: {
      hover: {
        backgroundColor: "GhostWhite",
      },
      button: {
        width: "34",
        height: "34",
        cursor: "pointer",
        pointerEvents: "none",
        outline: "none",
        backgroundColor: "red",
        border: "solid 1px rgba(255,255,255,1)",
      },
    },
    pause: {
      hover: {
        backgroundColor: "GhostWhite",
      },
      button: {
        width: "34",
        height: "34",
        cursor: "pointer",
        pointerEvents: "none",
        outline: "none",
        backgroundColor: "red",
        border: "solid 1px rgba(255,255,255,1)",
      },
    },
    resume: {
      hover: {
        backgroundColor: "GhostWhite",
      },
      button: {
        width: "34",
        height: "34",
        cursor: "pointer",
        pointerEvents: "none",
        outline: "none",
        backgroundColor: "red",
        border: "solid 1px rgba(255,255,255,1)",
      },
    },
  };

  return (
    <div className="container-fluid">
      <Row>
        <Col md="12" className="text-center mt-3">
          <h2>Voice Search</h2>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md="4" className="mr-3 ml-3">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText
                style={{ backgroundColor: "white", padding: "10px" }}
              >
                {" "}
                <FontAwesomeIcon
                  icon={faMicrophone}
                  onClick={SpeechRecognition.startListening}
                  style={{
                    cursor: "pointer",
                    color: listening ? "red" : "",
                  }}
                />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Voice Search Only..."
              defaultValue={transcript}
              style={{ borderLeft: "none" }}
              readOnly={true}
            />
            <InputGroupAddon addonType="append">
              <InputGroupText
                style={{
                  border: "none",
                  backgroundColor: "white",
                }}
              >
                <Speech
                  text={transcript}
                  styles={textstyle}
                  voice="Google UK English Female"
                  disabled={transcript.length < 2}
                  textAsButton={true}
                  displayText={
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                  }
                ></Speech>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
      <Row className="mt-3 text-center">
        <Col md="4">
          <Row>
            <Col md="8"></Col>
            <Col md="2">
              <Button
                className="btn-danger btn-sm mt-2"
                onClick={SpeechRecognition.stopListening}
              >
                Stop
              </Button>
            </Col>
            <Col md="2" className="mt-2">
              <Button
                className="btn-warning btn-sm"
                onClick={resetTranscript}
                style={{
                  outline: "none",
                  backgroundColor: "solid 1px rgba(255,255,255,1)",
                }}
              >
                Reset
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Voice;
