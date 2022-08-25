import React, { Component } from "react";
import { render } from "react-dom";

const Location = () => {
  
    
    const componentDidMount = () => {
  return(

  
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    })
  );

  };

   
    return (
      
        {componentDidMount}
      
    );
  
}


export default Location;