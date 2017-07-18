import React from 'react';

const Nav = (props) => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand">KODE POS</a>
      </div>
      <div className="collapse navbar-collapse" id="nav">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#a">PANDUAN</a></li>
          <li><a href="https://github.com/fannyhasbi/kodepos-react" target="_blank" rel="noopener noreferrer">CODE</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;