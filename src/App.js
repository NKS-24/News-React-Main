/*import React from 'react'
import Navbar from './components/navbar/Navbar'
import News from './components/news/News'

const App = () => {
  return (
    <>
      <Navbar/>
      <News/>
      
    </>
    

  )
}

export default App*/

import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [category, setCategory] = useState('general');

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="container mt-5">
      <Navbar onSelectCategory={handleCategorySelect} />
      <News category={category} />
    </div>
  );
};

export default App; 
/*

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import News from './components/news/News'
import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/category/:category" render={(props) => <News category={props.match.params.category} />} />
      </Routes>
    </Router>
  );
};

const NewsWrapper = () => {
  const { category } = useParams();
  return <News category={category} />;
};

export default App; */



