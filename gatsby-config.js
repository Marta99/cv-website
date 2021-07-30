module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My first CV website",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud", 
    "gatsby-remark-line-breaks",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: 'src/images/foto.jpg'
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'marta-cv-website',
        schemas: {
          post: require('./custom_types/post.json'),
        },
      },
    },
  ],
};
