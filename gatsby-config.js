require('dotenv').config()

const TITLE = `tuString`

module.exports = {
  siteMetadata: {
    title: TITLE,
    description: `O front-endzie i nie tylko`,
    author: {
      name: `Jakub Biesiada`,
      summary: `Front-end developer i pasjonat nadgryzionych jabłek. Fan nowinek JavaScriptowych i nie tylko. Wielbiciel punk rocka i dobrej kawy.`,
    },
    siteUrl: `https://tustring.pl/`,
    keywords: [
      'front',
      'end',
      'javascript',
      'blog',
      'css',
      'html',
      'react',
      'string',
      'programowanie',
    ],
    social: {
      github: `https://github.com/JB1905/`,
      linkedin: `https://www.linkedin.com/in/jakub-biesiada/`,
      facebook: `https://www.facebook.com/kuba.biesiada/`,
      twitter: `https://twitter.com/JBiesiad/`,
      portfolio: `https://biesiada.dev/`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: `${__dirname}/src/**/*.{tsx,ts}`,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-reading-time`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typegen`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: TITLE,
        short_name: TITLE,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2d2faf`,
        display: `standalone`,
        icon: `static/favicon.ico`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`nunito:400,600,700,900`],
        display: `swap`,
      },
    },
  ],
}
