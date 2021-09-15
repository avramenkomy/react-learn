import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function ButtonTest() {
  const [state, setState] = useState(false);

  function onChange() {
    setState(state => !state)
  }

  return (
    <div>
      <Button
        variant="primary"
        onClick={ onChange }
        data-testid="btnTest"
      >
        { state ? "Включено" : "Выключено" }
      </Button>
    </div>
  )
}