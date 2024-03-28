

import React, { useState, useEffect } from 'react';
import './time.css';

const CurrentDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDateTime = currentDateTime.toLocaleDateString(undefined, options);

  return (
    <div>
      <h2 style={{color: "#520736"},{fontWeight:"700"}}>Current Date and Time</h2>
      <p className='time'>{formattedDateTime}</p>
    </div>
  );
};

export default CurrentDateTime;
