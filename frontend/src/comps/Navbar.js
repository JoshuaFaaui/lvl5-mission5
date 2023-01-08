import React from 'react'
import NavLogo from '../assets/NavbarLogo.png'
import NavbarStyle from '../styles/Navbar/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div id='NavbarFoundation'>
      <div id="NavbarFoundationp1">
        <Link to='/' id='Navimg'><img src={NavLogo} alt="img" /></Link>
        <ul id='LinksFoundation' >
          <li id='PropertyOwners'><Link to='/MyMetro'>Property Owners</Link></li>
          <li id='Tenants'><Link to='/SuccApp'>Tenants</Link></li>
          <li id='News'><Link>News</Link></li>
          <li id='Register'><Link>Register</Link></li>
          <li id='Login'><Link>Login</Link></li>
        </ul>
      </div>
    </div>
    <hr id='NavHr'/>
    </>
  );
}

export default Navbar