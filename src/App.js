import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
// import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
import AnchorLink from 'react-anchor-link-smooth-scroll';


import SaveData from './SaveData';
import Register from './Register';

class App extends Component{
  render(){
    return(
      <div>

          <Register/>
          <SaveData/>

        <Navigation />
        <section id='top'><Header /></section>
        <section id='start'><Services /></section>
      </div>
    );
  }
}

export default App;
// App
