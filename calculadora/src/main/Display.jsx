import React from 'react';
import './Display.css';

export default props =>
  <div className="display">{props.value || 0}</div>