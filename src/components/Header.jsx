import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <div>
    <nav>
        <h1>Techystar</h1>
        <main>
            <Link to = {"/"}>Home</Link>
            <Link to = {"/contact"}>Contacts</Link>
            <HashLink to = {"/#about"}>About</HashLink>
            <HashLink to = {"/#brands"}>Brands</HashLink>
            <Link to = {"/services"}>Services</Link>
        </main>
    </nav>
    </div>
  )
}

export default Header
