// import React from "react";
// import { client } from "../lib/client";
// import { Product, FooterBanner, HeroBanner } from "../components";
// const Home = ({ products, bannerData }) => (
//   <>
//     <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
//     {/* {console.log(bannerData)} */}
//     <div className="products-heading">
//       <h2>best selling products</h2>
//       <p>Speakers of many compines</p>
//     </div>
//     <div className="products-container">
//       {products?.map((product) => product.name)}
//     </div>
//     <FooterBanner />
//   </>
// );

// export const getServerSideProps = async () => {
//   const query = '*[_type=="product"]';
//   const products = await client.fetch(query);
//   const bannerquery = '*[_type=="banner"]';
//   const bannerData = await client.fetch(bannerquery);

//   return {
//     props: { products, bannerData },
//   };
// };

// export default Home;


import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;