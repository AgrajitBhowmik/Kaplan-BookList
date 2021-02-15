import React from "react";
import { Alert } from "react-bootstrap";
function CustomAlert({ variant, handleShow, text }) {
  return (
    <Alert variant={variant} onClose={() => handleShow(false)} dismissible>
      <Alert.Heading>{text}</Alert.Heading>
    </Alert>
  );
}

export default CustomAlert;
