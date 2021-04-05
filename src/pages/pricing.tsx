import React from "react";
import clsx from "clsx";
import Layout from "../theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Header } from "../components/Header";
import { Pricing } from "../components/Pricing";

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
