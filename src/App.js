import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Loader from './components/loader';
import Signup from './components/signup';
import Login from './components/login';
import Main from './components/main';
import AI from './components/aiprompt';
import ChatBotFeature from './components/chatbotfeature';
import CheerUp from './components/cheerup';
import WellBeing from './components/wellbeing';
import QuizHolder from './components/QuizHolder';
function App() {
  return (
    <div className="container">
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<Loader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/CheerUp" element={<CheerUp />} />
        <Route path="/Chatbot" element={<ChatBotFeature />} />
        <Route path="/WellBeingScore" element={<WellBeing/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
