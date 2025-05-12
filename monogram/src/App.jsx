import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBarBlue from './components/NavBarBlue';
import Shop from './pages/Shop';
import Download from './pages/Download';
import Blog from './pages/Blog';
import AtMonogram from './pages/AtMonogram';
import Audio from './pages/Audio';
import Photo from './pages/Photo';
import Video from './pages/Video';
import Product from './pages/Product';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
function App() {
  

  return (
    <div>
      <NavBarBlue />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/download" element={<Download />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/atmonogram" element={<AtMonogram />} />
        <Route path="/product" element={<Product />} />
        <Route path="/photo" element={<Photo/>} />
        <Route path="/video" element={<Video />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/accueil" element={<Accueil />} />
      </Routes>
      <Footer />
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
