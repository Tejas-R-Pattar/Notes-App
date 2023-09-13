import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import Auth from "./Auth"

function Header() {
  return (
    <header>
    
      <h1>
        {" "}
        <BsPencilSquare />  Notes
      </h1>
      <Auth />
    </header>
  );
}

export default Header;
