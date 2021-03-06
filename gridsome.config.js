// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "ramsane",
  siteDescription:
    "A simple portfolio that has few blogs that explains the concepts and ideas from various fields like ComputerVision, MachineLearning",
  siteUrl: "https://ramsane.github.io",
  titleTemplate: `%s | Ramana Reddy Sane`,
  icon: "./src/icon.svg",

  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      /**
       * These are the default options. You don't need to set any options to get
       * going. Seriously, you don't need to declare tailwind.config.js.
       */
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {
          whitelist: ["animation-expand"],
          whitelistPatterns: [/.*katex.*/],
          whitelistPatternsChildren: [/nprogress/],
        },
        presetEnvConfig: {
          /* use stage 3 features + css nesting rules */
          stage: 3,
          features: {
            "nesting-rules": true,
          },
        },
        shouldPurge: true, // default
        shouldImport: true, // default
        shouldTimeTravel: true, // default
      },
    },

    // vue remark - Articles
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Article", // same as collection name in Graphql
        baseDir: "./content/articles", //where all articles .md files are there
        route: "/articles/:slug", // route for an article where slug must be a front matter field.
        template: "./src/templates/Article.vue", // by default, it will take Article.vue as it is same as typeName if present. But better to be explicit
        //  reerences like relations for GraphQl and the refes expected to be exists
        refs: {
          author: {
            typeName: "Author", //Author collection
          },
          tags: {
            typeName: "Tag", //Tag collection
          },
          category: {
            typeName: "Category", //Category collection
          },
        },

        // remark plugins
        plugins: [
          "gridsome-remark-katex",
          [
            "gridsome-plugin-remark-youtube",
            {
              width: "100%",
              align: "auto",
            },
          ],
          "@gridsome/remark-prismjs",
        ],
      },
    },

    // to generate rss, json and atom feed
    {
      use: "gridsome-plugin-feed",
      options: {
        contentTypes: ["Article"],
        feedOptions: {
          title: "ramsane",
          description: "RamSane Blog",
          link: "https://ramsane.github.io",
        },
        rss: {
          enabled: true,
          output: "/feed.xml",
        },
        atom: {
          enabled: true,
          output: "/feed.atom",
        },
        json: {
          enabled: true,
          output: "/feed.json",
        },

        maxItems: 25,
        filterNodes: (node) => true, // we can filter nodes like published or not here.
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date,
          content: node.excerpt,
        }),
      },
    },

    // for generating site-maps
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
        exclude: ["/exclude-me"],
        config: {
          "/articles/*": {
            changefreq: "weekly",
            priority: 0.5,
          },
        },
      },
    },
  ],

  // templates for each collection  -- doesn't work if collections are from vue-remark (YET)
  templates: {
    Tag: [
      {
        path: "/tag/:title",
        component: "./src/templates/Tag.vue",
      },
    ],
    Category: [
      {
        path: "/category/:slug",
        component: "./src/templates/Category.vue",
      },
    ],
    Author: [
      {
        path: "/author/:slug",
        component: "./src/templates/Author.vue",
      },
    ],
  },

  // for svg loader
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
};
