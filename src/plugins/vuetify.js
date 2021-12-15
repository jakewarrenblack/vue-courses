import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  // Material design
  iconfont: "md",
  // Provide colours to override default theme
  theme: {
    themes: {
      light: {
        primary: "#535352",
        secondary: "#60B664",
        lessEmphasis: "#E1E1E1",
        background: "#EEEEEE",
      },
      dark: {
        primary: "#111111",
        secondary: "#4003ab",
        lessEmphasis: "#E1E1E1",
        background: "#272525",
      },
    },
  },
});
