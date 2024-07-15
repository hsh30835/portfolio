import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
// import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/project1" element={<Project1 />} /> */}
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
