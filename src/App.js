import React, { useEffect, useState } from "react";
import Tweet from "./Tweet";
import "./App.css";


function App(){

  const searchReq='http://localhost:8080/v1/search?attribute=subject&value=missing';

  useEffect(() => {
    getTickets();
  },[])

  const getTickets = async() =>{
    const response = await fetch(searchReq);
    const data = await response.json();
    console.log(data);
    setTweets(data)
  }

  const [tweets,setTweets]= useState([]);

  return (
    <div className='app'>
      
      
      {
        tweets.map(tweet => (
          <Tweet name={tweet.priority} message={tweet.subject} likes={tweet.status}/>
        ))
      }
    </div>
  );
}


export default App;