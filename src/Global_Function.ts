import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



    export function PathChangeHandler() {
    const location = useLocation();
  
    useEffect(() => {
      // Your function to run on path change goes here
      console.log(`Path changed to: ${location.pathname}`);
  
      // You can call any function or perform any action here
    }, [location.pathname]);
  
    return null; // Return null or an empty component because this component doesn't render anything
  }
