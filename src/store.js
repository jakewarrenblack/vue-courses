import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
  },
  getters: {},
  mutations: {
    // method receives a state and a status
    SET_LOGGED_IN_STATUS(state, loggedIn) {
      state.loggedIn = loggedIn;
    },
  },
  // we want our login action to be performed on form submit
  actions: {
    // 'context' is built into vuex, every action with have the context
    login(context, credentials) {
      console.log(credentials);

      axios
        .post(`https://college-api-mo.herokuapp.com/api/login`, {
          email: credentials.email,
          password: credentials.password,
        })
        .then((response) => {
          console.log(response.data.token);

          // we did this in the old way:
          //this.$emit("login", response.data.token);

          // takes the name of the mutation and the new value
          context.commit("SET_LOGGED_IN_STATUS", true);
          localStorage.setItem("token", response.data.token);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.message);
        });
    },
    // Again, we *always* pass in the context!
    logout(context) {
      localStorage.removeItem("token");
      context.commit("SET_LOGGED_IN_STATUS", false);
    },
  },
});
