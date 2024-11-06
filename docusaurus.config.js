// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = "src/themes/github/index.cjs.js"
const darkCodeTheme = "src/themes/dracula/index.cjs.js"

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sustainable Development Goals',
  tagline: 'SDG',
  favicon: 'img/trans-wheel.ico',

  // Set the production url of your site here
  url: 'https://sdg-17.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'korauo', // Usually your GitHub org/user name.
  projectName: 'sdg', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'fr', 'zh-guoyu', 'ru', 'hi'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      ar: {
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'Sustainable Development Goals',
        logo: {
          alt: 'My Site Logo',
          src: 'img/trans-wheel.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'goalsSidebar',
            position: 'left',
            label: 'Goals',
          },
          {
            type: 'docSidebar',
            sidebarId: 'unSidebar',
            position: 'left',
            label: 'United Nations'
          },
          {
            type: 'docSidebar',
            sidebarId: 'uaeSidebar',
            position: 'left',
            label: 'United Arab Emirates'
          },
          {
            type: 'html',
            position: 'right',
            value: '<img src="https://i.imgur.com/JZN90qr.png" width="35" height="35"/>',
          },
          {
            type: 'html',
            position: 'right',
            className: 'watermark button',
            value: 'by Mohammed Aman 9B',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `copyright © 2024 | Made by Mohammed Aman 9B`,
      },
    }),
};

module.exports = config;