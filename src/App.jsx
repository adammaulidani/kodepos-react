import React from 'react';

import Nav from './components/Nav';
import Header from './components/Header';
import Form from './components/Form';

class App extends React.Component {
  render(){
    return (
      <div>
        <Nav />
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;