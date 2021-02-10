import UrlParser from './urlParser';
import React, {Component} from 'react';
import './index.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (
    <UrlParser />
  );
}
}

export default App;
