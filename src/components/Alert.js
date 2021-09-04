import React, { useContext } from 'react';

import Context from "../context";

function Alert() {
  const { alertProps } = useContext(Context);
  const classes = [];

  if (alertProps.alertView) {
    classes.push('open');
  } else {
    classes.push('close');
  }

  return (
    <div>
      {
        alertProps.alertView
        && (
          <div className="alert alert-warning alert-dismissible" role="alert">
            { alertProps.msg }
          </div>
        )
      }
    </div>
  )
}

export default Alert;