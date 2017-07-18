import React from 'react';

import Nav from './components/Nav';
import Header from './components/Header';

class App extends React.Component {
  render(){
    return (
      <div>
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;