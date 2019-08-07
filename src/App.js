import React from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Display from './containers/Display';
import SearchBar from './components/SearchBar';

const App = () => {

  return (
    <div className="App">
      <Header />

      <SearchBar />

      <Display />

      <Footer />
    </div>
  );
  }

export default App;
