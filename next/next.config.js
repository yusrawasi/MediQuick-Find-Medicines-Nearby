const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//     webpackDevMiddleware: config => {
//       config.watchOptions = {
//         poll: 1000,
//         aggregateTimeout: 300,
//       }
//       return config
//     },
//   })


// const withSass = require("@zeit/next-sass");
// const withFonts = require("next-fonts");

// module.exports = withSass(withFonts({
//   cssModules: false,
//   enableSvg: true,
//   webpack (config, options) {
//     config.module.rules.push({
//       test: /\.(png|jpg|gif)$/,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 100000
//         }
//       }
//     })
//     return config
//   }
// }))

const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");

module.exports = withCSS(withSass(withFonts({
  cssModules: false,
  enableSvg: true,
  webpackDevMiddleware: config => {
          config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
          }
          return config
        },
  webpack (config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })
    return config
  }
})))