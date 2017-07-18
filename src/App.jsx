import React from 'react';

import Nav from './components/Nav';
import Header from './components/Header';
import Form from './components/Form';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      start: false
    }
  }

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