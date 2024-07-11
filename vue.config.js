const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp)$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "img/[name].[hash:8].[ext]",
      });
  },
});
