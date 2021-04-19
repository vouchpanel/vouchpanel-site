import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";
import { Pricing } from "../components/Pricing";
import Layout from "../theme/Layout";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Embed testimonials on your website with ${siteConfig.title}`}
      description="Embed tweets and testimonials onto your webflow, shopify, squarespace, or react website."
    >
      <Pricing></Pricing>
    </Layout>
  );
}
