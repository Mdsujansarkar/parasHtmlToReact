import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component {
 render(){
     return(
        <div>
            <nav class="navbar navbar-default navbar-trans navbar-expand-lg ">
         <div class="container">
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
               aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
            </button>
            <a class="navbar-brand text-brand" href="index.php">SHEIKH F SHAMS<span class="color-b"></span></a>
            <div class="navbar-collapse collapse justify-content-center" id="navbarDefault">
               <ul class="navbar-nav">
                  <li class="nav-item">
                     <Link class="nav-link" to="/">HOME</Link>
                  </li>
                  <li class="nav-item">
                  <Link class="nav-link" to="/about">ABOUT</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" to="/news">NEWS</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="nav-link" to="/publication">PUBLICATIONS</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
        </div>
     );
 }
}
export default Header;