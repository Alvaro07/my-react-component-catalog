const path = require("path");

module.exports = {
  require: [path.join(__dirname, "src/styles/styleguidist.scss")],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700'
        }
      ]
    }
  },
  theme: {
    fontFamily: {
      base: '"Roboto", sans-serif'
    }
  }
}