module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "AWS_Cloud_Practitioner_Essentials",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
