import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Crew } from './pages/Crew';
import { Destination } from './pages/Destination';
import Home from './pages/Home';
import { Technology } from './pages/Technology';

const App : React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
