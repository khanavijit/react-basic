import React from "react";
import "./App.css";

function Tweet(prop){
    return (

        <div className='tweet'>  
        <h3>{prop.name}</h3>
        <p>{prop.message}</p>
        <h4>nr of likes : {prop.likes}</h4>               
        </div>
    );
}

export default Tweet;