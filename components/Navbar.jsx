import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import { Layout } from "./Layout";
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-container">
        <div className="container-fluid logo">
          <a className="navbar-brand logo" href="/">
            Shop Go
          </a>
        </div>

        <button
          type="button"
          className="cart-icon"
          onClick={() => {
            setShowCart(true);
          }}
        >
          <AiOutlineShopping className="basket" />
          <span className="cart-item-qty">{totalQuantities} </span>
        </button>

        {showCart && <Cart mg={2} />}
      </nav>
    </>
  );
};

export default Navbar;
