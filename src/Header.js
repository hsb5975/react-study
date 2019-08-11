import React, {Component} from 'react';
import Reserve from './Reserve';

import './Header.css'


class Header extends Component{

  render(){
    return (
      <header  className="">
        <Reserve reserveTitle="상담예약하기"/>
      </header>
    );
  }
}

export default Header;
