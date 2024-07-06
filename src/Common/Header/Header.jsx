import React from "react";
import Head from "./Head";
import Search from "./Search";
import "./Header.css";
import Navbarr from "./Navbar";
export default function Header({ CartItem }) {
  return (
    <div>
      <Head />
      <Search CartItem={CartItem} />
      <Navbarr />
    </div>
  );
}
