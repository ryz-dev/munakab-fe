const path = require("path")
const withCss = require("@zeit/next-css")

const aliases = {
  Containers: path.resolve(__dirname, "containers"),
  Components: path.resolve(__dirname, "components"),
  Images: path.resolve(__dirname, "images"),
  Utils: path.resolve(__dirname, "components/utilities/"),
  Layout: path.resolve(__dirname, "components/pageLayouts/"),
  Hocs: path.resolve(__dirname, "hocs/"),
  Hooks: path.resolve(__dirname, "hooks/"),
  Static: path.resolve(__dirname, "static/"),
  Actions: path.resolve(__dirname, "redux/actions"),
  Reducers: path.resolve(__dirname, "redux/reducers"),
  Types: path.resolve(__dirname, "redux/types"),
  Config: path.resolve(__dirname, "config/"),
  Routes: path.resolve(__dirname, "config/routes.js"),
}

const nextConfig = withCss({
  // Alias
  alias: aliases,

  // Webpack
  webpack: config => {
    // Resolve path
    config.resolve = {
      ...config.resolve,
      extensions: [...config.resolve.extensions, ".scss", ".css", ".mdx"],
      alias: { ...config.resolve.alias, ...aliases },
    }

    return config
  }
})

module.exports = nextConfig
