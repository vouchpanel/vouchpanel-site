import { Header } from "../components/Header";
import React from "react";
import Wall from "@vouchpanel/react";
import Layout from "../theme/Layout";

const OurWall = (props: {}) => {
  return (
    <Layout
      title={`Vouchpanel sample wall.`}
      description="Embed tweets and testimonials onto your webflow, shopify, squarespace, or react website."
    >
      <Header
        label={"Tweet Wall"}
        title="Elon Musk"
        subtitle={"Showcase the favourites 💖"}
      ></Header>
      <Wall id={"7"} darkMode="off"></Wall>
    </Layout>
  );
};

export default OurWall;
