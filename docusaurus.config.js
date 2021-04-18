/** @type {import('@docusaurus/types').DocusaurusConfig} */

const path = require("path");

module.exports = {
  title: "vouchpanel",
  tagline: "The simplest way to embed tweets and testimonials on your website.",
  url: "https://vouchpanel.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "vouchpanel", // Usually your GitHub org/user name.
  projectName: "vouchpanel", // Usually your repo name.
  plugins: [
    path.resolve(__dirname, "plugins/loaders"),
    "@docusaurus/plugin-ideal-image",
  ],

  themeConfig: {
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: "Vouchpanel",
      logo: {
        alt: "Vouchpanel Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/vouchpanel",
          label: "GitHub",
          position: "left",
        },
        {
          href: "https://app.vouchpanel.com/signup",
          label: "Signup",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs",
            },
          ],
        },
        {
          title: "Pricing",
          items: [
            {
              label: "Pricing",
              to: "/pricing",
            },
          ],
        },
        {
          title: "Features",
          items: [
            {
              label: "Content Delivery Network",
              href: "/features/content-delivery-network/",
            },
            {
              label: "Small Size",
              href: "/features/small-size/",
            },
            {
              label: "No Code",
              href: "/features/no-code/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "Sign up",
              href: "https://app.vouchpanel.com/signup",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vouchpanel, Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/vouchpanel/vouchpanel-site/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/vouchpanel/vouchpanel-site/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
