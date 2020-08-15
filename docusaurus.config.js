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
    image: "img/logo.png",
    defaultDarkMode: false,
    announcementBar: {
      id: "star_us", // Any value that will identify this message.
      content:
        '🤩If you like Camara, please give it a star ⭐️ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Camaradotspace/Camara">GitHub</a> 🤩',
      backgroundColor: "#306597", // Defaults to `#fff`.
      textColor: "#fff", // Defaults to `#000`.
    },
    // sidebarCollapsible: false,
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
      style: "light",
      logo: {
        alt: "Camara Logo",
        src: "img/logo.png",
        href: "https://github.com/Camaradotspace",
      },
      links: [
        {
          title: "Camara",
          items: [
            {
              label: "Why Camara",
              to: "docs/camara/why-camara",
            },
            {
              label: "About Camara",
              to: "docs/camara/about/",
            },
            {
              label: "Roadmap",
              to: "docs/releases/roadmap/",
            },
          ],
        },
        {
          title: "Open Source",
          items: [
            {
              label: "License",
              to: "docs/oss/license",
            },
            {
              label: "Contribution Guide",
              to: "docs/oss/contribution-guide/",
            },
            {
              label: "Code of Conduct",
              to: "docs/oss/code-of-conduct",
            },
            {
              label: "What's New?",
              to: "docs/releases/changelog/",
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
              to: "docs/resources/figma-design-library",
            },
            {
              label: "Sample Projects",
              to: "docs/resources/sample-projects",
            },
            {
              label: "Blog",
              // to: "blog",
              to: "docs/",
            },
            {
              label: "GitHub",
              href: "https://github.com/Camaradotspace/Camara",
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
          homePageId: "camara/introduction",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/Camaradotspace/Camara",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/Camaradotspace/Camara",
          blogDescription:
            "News, updates and releases on the Camara Design System",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
