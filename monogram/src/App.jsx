import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBarBlue from './components/NavBarBlue';
import Shop from './pages/Shop';
function App() {
  

  return (
    <div>
      <NavBarBlue />
      <Routes>
        <Route path="/" element={<Shop />} />
        
      </Routes>
      
    </div>
  );
}

export default function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
