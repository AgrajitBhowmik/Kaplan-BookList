import React, { useState } from "react";
import { Form, Toast } from "react-bootstrap";

function Input({ name, value, label, error, onChange }) {
  const [show, setShow] = useState(true);
  return (
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        type="text"
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        placeholder={`Enter ${label}`}
      />
      {error && (
        <Toast className="bg-danger" onClose={() => setShow(false)}>
          <Toast.Body>
            <b>{error}</b>
          </Toast.Body>
        </Toast>
      )}
    </Form.Group>
  );
}

export default Input;
