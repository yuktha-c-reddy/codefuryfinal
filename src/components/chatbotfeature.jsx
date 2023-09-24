
import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Link } from 'react-router-dom';
import '../App.css';

function ChatBotFeature() {
  
  const steps = [
    {
      id: "Greet",        
      message: "Hello, Welcome to MindfullNess",        
      trigger: "Done",        
    },        
    {       
      id: "Done",        
      message: "Please enter your name!",        
      trigger: "waiting1",        
    },      
    {      
      id: "waiting1",      
      user: true,      
      trigger: "Name",      
    },      
    {       
      id: "Name",     
      message: "Hi {previousValue}, Please select your issue",     
      trigger: "issues",     
    },      
    {      
      id: "issues",   
      options: [   
        {    
          value: "Need a psycologist",   
          label: "Need a psycologist",        
          trigger: "Need a psycologist",       
        },       
        { 
          value: "Need an immediate advice", 
          label: "Need an immediate advice",
           trigger: "Need an immediate advice" 
        }, 
        { 
          value: "Need some positive content", 
          label: "Need some positive content",
          trigger: "Need some positive content" 
        },      
      ],       
    },       
    {       
      id: "Need a psycologist",       
      message:        
        "Thanks for letting us know your issue, Our team will resolve your issue ASAP",        
      end: true,       
    },       
    {       
      id: "Need an immediate advice",       
      message:       
        "Thanks for letting us know your issue,Please check the WellBeing feature of the website",       
      end: true,       
    }, 
    {       
      id: "Need some positive content",       
      message:       
        "Thanks for letting us know your issue,Please check the CheerUp feature of the website",       
      end: true,       
    },      
  ]; 
  return (
    <div className='chat'>
    <segment floated="right">
      <ChatBot steps={steps} />
    </segment>
    <Link to="/main">
      <a class="fancy" href="#">
      <span class="top-key"></span>
      <span class="text">Main Page</span>
     <span class="bottom-key-1"></span>
     <span class="bottom-key-2"></span>
      </a>
      </Link>
    </div>
  );
}

export default ChatBotFeature;
