// import "../styles/globals.css";
// import React from "react";
// import { Layout } from "../components";
// import type { AppProps } from "next/app";
// import { StateContext } from "../context/StateContext";
// import { Toaster } from "react-hot-toast";

// // import 'bootstrap/dist/css/bootstrap.min.css';
// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <>
   
//       <StateContext>
//         <Layout>
//           <Toaster />
//           <Component {...pageProps} />
//         </Layout>
//       </StateContext>
//     </>
//   );
// }


import React from 'react';
import { Toaster } from 'react-hot-toast';
import { AppProps } from 'next/app';
import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp