import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Forum</h1>
      <div>
        <NavLink to={"/"}>Gönderiler</NavLink>
        <NavLink to={"/add-post"}>Gönderi Ekle</NavLink>
      </div>
    </header>
  );
};

export default Header;
