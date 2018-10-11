module.exports = {
  title: "Adam Collier",
  description: "Adam Colliers portfolio",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Work",
        items: [
          { text: "Rownan", link: "/work/rownan/" },
          { text: "Mennace", link: "/work/mennace/" },
          { text: "Midl", link: "/work/midl/" },
          { text: "Staash", link: "/work/staash/" },
          { text: "Bookle", link: "/work/bookle/" }
        ]
      }
    ]
  },
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false,
      permalinkSymbol: ""
    }
  },
  shouldPrefetch: function() {
    return false;
  }
};
