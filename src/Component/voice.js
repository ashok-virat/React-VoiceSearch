import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <div className="container-fluid">
      <Row>
        <Col md="12" className="text-center">
          <h2>Voice Search</h2>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md="4" className="mr-3 ml-3">
          <span className="input-group-text">
            <FontAwesomeIcon
              icon={faMicrophone}
              onClick={SpeechRecognition.startListening}
              style={{
                marginRight: "10px",
                cursor: "pointer",
                color: listening ? "red" : "",
              }}
            />
            <span className="text-center"> {transcript}</span>
          </span>
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
              <Button className="btn-warning btn-sm" onClick={resetTranscript}>
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
