module.exports = {
  siteMetadata: {
    title: `tuString`,
    author: {
      name: `Jakub Biesiada`,
      summary: `Front-end developer i pasjonat nadgryzionych jabłek. Fan nowinek JavaScriptowych i nie tylko. Wielbiciel punk rocka i dobrej kawy.`,
    },
    description: ``,
    siteUrl: `https://tu-string.now.sh`,
    social: {
      github: `https://github.com/JB1905/`,
      linked: `https://www.linkedin.com/in/jakub-biesiada/`,
      facebook: `https://www.facebook.com/kuba.biesiada/`,
      twitter: `https://twitter.com/JBiesiad/`,
      portfolio: `https://jb1905.github.io/portfolio/`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {},
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tuString`,
        short_name: `tuString`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `static/favicon.ico`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-dark-mode`,
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
