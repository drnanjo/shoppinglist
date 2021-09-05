import React from 'react';
import {  Link } from "react-router-dom";
import "./navbar.css";
const Navbar= () =>{
  return (
		<header class="header">
		<div class="left">
			<a href="#">Shopping List Navbar</a>
		</div>
  <div class="mid">
		<ul class="navbar">
			 <li>
      <Link to="/">Main Sail</Link>
    </li>
    <li>
      <Link to="/LifeLine">Life Line</Link>
    </li>
    <li>
      <Link to="/SailBag">Sail Bag</Link>
    </li>
    <li>
      <Link to="/Anchor">Anchor</Link>
    </li>
		</ul>
   
  </div>
	<div class="right">
          <a href="#">Welcome</a>
        </div>

    </header>
  );
}
export default Navbar;