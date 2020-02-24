import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Inquiry from './components/Inquiry';

function App() {
  const styles = {
    border :'#343a40 1px solid',
    minHeight :'400px',
    margin:'15px'
  }
  return (
    <div className="App" style={styles}>
     <Header></Header>
     <Inquiry></Inquiry>
    </div>
  );
}

export default App;
