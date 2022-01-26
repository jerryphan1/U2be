
import React from 'react';

const ErrorPage = ({location: { pathname }}) => (
  <div id='error-container'>
    <a href='#'>
        <img src={window.u2be_logo} alt="main-logo" id='error-logo'/>
    </a>
    <h2 id='error-statement'>Placeholder 404 not found</h2>
  </div>
);

export default ErrorPage;