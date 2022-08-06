import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';  

const AlertBox = () => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert id="alert-message" variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Are you sure you wanted to add five classes that semester?</Alert.Heading>
      </Alert>
    );
  }
};

export default AlertBox;