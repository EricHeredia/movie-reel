import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Display from './containers/Display';
import SearchBar from './components/SearchBar';

const App = () => {

  const [showthis, setShowthis] = useState('Main');

  return (
    <div className="App">
      <Header />

      <SearchBar />

      <Display show={showthis} setShowthis={setShowthis} />

      <Footer />
    </div>
  );
  }

export default App;
