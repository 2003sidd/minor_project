import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';


import Contact from './Contact.jsx';
import ChatBot from './ChatBot.jsx';
import AllWorkout from './Recommended.jsx';
import Dailytask from './DailyTask.jsx';
import Analysis from './Analysis.jsx';
import FillInfo from './filterExercise.jsx';
// import PageOne from './PageOne.jsx';
// import PageTwo from './PageTwo.jsx';
// import PageThree from './PageThree.jsx';

import Stretching from './Stretching.jsx';
import PushUps from './PushUps.jsx'
import MountainClimber from './MountainClimber.jsx';
import DualDumbell from './DualDumbell.jsx';
import Running from './Running.jsx';
import CableExercise from './CableExercise.jsx';
import BallsExercise from './BallsExercise.jsx';
import Squat from './Squat.jsx';



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
          <Route path="/filter"  element={<FillInfo/>} />
      
          {/* <Route path="/page-one" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
        <Route path="/page-three" element={<PageThree />} /> */}

<Route path="/stretching" element={<Stretching />} />
        <Route path="/pushups" element={<PushUps />} />
        <Route path="/dualdumbell" element={<DualDumbell />} />
        <Route path="/mountainclimber" element={<MountainClimber />} />
        <Route path="/cableexercise" element={<CableExercise />} />
        <Route path="/ballsexercise" element={<BallsExercise/>} />
        <Route path="/running" element={<Running />} />
        <Route path="/squat" element={<Squat />} />
       
        

        </Routes>

    </BrowserRouter>
  );
}

export default App;

