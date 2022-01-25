module.exports = {
  siteMetadata: {
      title: `Os Doutorzinhos`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "9Lx1SYgrfV5Lx8TwsOZW9yR2W6c_lerK0_iJg6OXRro",
      "spaceId": "f86i3o7ef56u"
    }
  }, "gatsby-plugin-image", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};