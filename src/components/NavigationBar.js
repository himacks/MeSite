import React from 'react'
import '../styling/NavigationBar.css';
import {Menu} from 'react-feather';

 

export default function NavigationBar() {
  return (
    <header className="headerBar">
          <div className="headerBarCont">
            <div className="nameCont">
              <t1 className="myNameLogo">Maxim Karpinsky</t1>
            </div>
            <Menu className="svgIcon"/>
          </div>
      </header>
  )
}
