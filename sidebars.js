/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  tablelandBasics: [
    {
      type: "category",
      label: "Tableland basics",
      link: {
        type: "generated-index", // Auto generate a landing page the links to all sub-pages
      },
      // Or, point to a specific page as the category's landing page
      // link: {
      //   type: "doc",
      //   id: "sdk/overview",
      // },
      items: ["learn/tableland/what-is-tableland"],
    },
  ],
  sqlBasics: [
    {
      type: "category",
      label: "SQL basics",
      link: {
        type: "generated-index",
      },
      items: ["learn/sql/what-is-sql"],
    },
  ],
  blockchainBasics: [
    {
      type: "category",
      label: "Blockchain basics",
      link: {
        type: "generated-index",
      },
      items: ["learn/blockchain/what-is-blockchain"],
    },
  ],
  sdk: [
    {
      type: "category",
      label: "SDK",
      link: {
        type: "generated-index",
      },
      items: [
        "sdk/getting-started",
        "sdk/connect",
        "sdk/create",
        "sdk/write",
        "sdk/read",
      ],
    },
  ],
  cli: [
    {
      type: "category",
      label: "CLI",
      link: {
        type: "generated-index",
      },
      items: [
        "cli/getting-started",
        "cli/connect",
        "cli/create",
        "cli/write",
        "cli/read",
      ],
    },
  ],
  smartContracts: [
    {
      type: "category",
      label: "Smart contracts",
      link: {
        type: "generated-index",
      },
      items: [
        "smart-contracts/getting-started",
        "smart-contracts/connect",
        "smart-contracts/create",
        "smart-contracts/write",
        "smart-contracts/read",
      ],
    },
  ],
  sql: [
    {
      type: "category",
      label: "SQL",
      link: {
        type: "generated-index",
      },
      items: ["sql/sql-spec"],
    },
  ],
  validator: [
    {
      type: "category",
      label: "Protocol",
      link: {
        type: "generated-index",
      },
      items: ["protocol/validator-spec"],
    },
  ],
};

module.exports = sidebars;
