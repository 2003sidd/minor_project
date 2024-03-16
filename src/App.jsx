import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import ChatBot from './ChatBot.jsx';
import AllWorkout from './Recommended.jsx';
import Dailytask from './DailyTask.jsx';
import Analysis from './Analysis.jsx';


function App() {
  return (
    <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="chatbot" element={<ChatBot />} />
          <Route path="allworkout" element={<AllWorkout />} />
          <Route path="dailytask" element={<Dailytask />} />
          <Route path="analysis" element={<Analysis />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;

