module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-courses/" : "/",
  transpileDependencies: ["vuetify"],
};
