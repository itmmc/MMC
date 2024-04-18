import React from 'react';
import './not-found.css'; 

function NotFound() {

  return (
    <div className="not-found-container">
      <h1>404 Not Found</h1>
      <p  className='not-found-desc'>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;