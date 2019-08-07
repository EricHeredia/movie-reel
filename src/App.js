import React from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Display from './containers/Display';
import SearchBar from './components/SearchBar';

function App() {
  const testF = (tester) => {
    document.getElementsByTagName('Display').page = "details"
  }
  
  return (
    <div className="App">
      <Header sendLink={() => testF} />

      <SearchBar />

      <Display page="main" />

      <Footer />
    </div>
  );
}

export default App;
