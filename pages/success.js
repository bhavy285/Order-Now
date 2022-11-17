import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";
const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, setOrder] = useState(null);
  useEffect(() => {
    localStorage.clear();

    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks()
  }, []);

  return (
    <div className="success-wraper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank You for your order!</h2>
        <p className="email-msg">Check your Email for Receipt</p>
        <p className="description">
          if You have any query
          <a href="mailto:shahbhavy285@gmail.com" className="email">
            Contact us
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
