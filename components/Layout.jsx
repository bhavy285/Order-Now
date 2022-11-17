import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({children}) => {
  return (
    <div className="layout">
      <Head>
        <title>Buy Go</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className="main-container" id="main_id" >
       {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
