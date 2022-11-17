import sanityClient from "@sanity/client";

import imageUrlBuilder  from "@sanity/image-url";
// import cli from "nodemon/lib/cli";

export const client = sanityClient({
  projectId: "lyt2s332",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);