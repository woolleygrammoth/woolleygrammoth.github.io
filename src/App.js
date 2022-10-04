import React from "react";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import CV from './pages/CV';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

// import './css/App.css';
// import './css/old-styles.css'
import './css/styles.css'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/cv' element={<CV />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
