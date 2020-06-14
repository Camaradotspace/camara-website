module.exports = {
  title: "Camara",
  tagline:
    "A Design System that helps you bring your ideas to life quickly and with less code",
  url: "https://camara.space",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "camaradotspace", // Usually your GitHub org/user name.
  projectName: "camara-website", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Camara",
      logo: {
        alt: "Camara Logo",
        src: "img/logo.png", // FIXME: provide an SVG version of the logo and change this file extension here
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/Camaradotspace/Camara",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Camara",
          items: [
            {
              label: "Why Camara",
              to: "docs/",
            },
            {
              label: "About Camara",
              to: "docs/doc2/",
            },
            {
              label: "Roadmap",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Open Source",
          items: [
            {
              label: "License",
              to: "docs/",
            },
            {
              label: "Contribution Guide",
              to: "docs/doc2/",
            },
            {
              label: "Code of Conduct",
              to: "docs/",
            },
            {
              label: "What's New?",
              to: "docs/doc2/",
            },
          ],
        },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus",
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            {
              label: "Figma Design Library",
              to: "blog",
            },
            {
              label: "Sample Projects",
              to: "blog",
            },
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Camaradotspace`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "why-camara",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/Camaradotspace/Camara",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/Camaradotspace/Camara",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
