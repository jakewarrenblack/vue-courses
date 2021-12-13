import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // new state will be mapped to this value by the login/logout events
    loggedIn: false,
    // we can call this.$store.dispatch(toggleSnackbar) from any page or component, or access the method using ...mapActions
    // we can pass in a payload to this method to then pass into the TOGGLE_SNACKBAR mutation, which will provide new values to the snackbar's state below
    // the snackbar models all of these attributes to decide how it should look
    snackbar: {
      visible: false,
      message: null,
      timeout: 6000,
      multiline: false,
    },
    dialog: {
      message: null,
      visible: false,
    },
  },
  getters: {},
  mutations: {
    // method receives a state and a status
    SET_LOGGED_IN_STATUS(state, loggedIn) {
      state.loggedIn = loggedIn;
    },
    TOGGLE_SNACKBAR(state, payload = null) {
      if (payload) {
        state.snackbar.message = payload.text;
        // Use multiline mode if we've passed a very long message in the payload
        state.snackbar.multiline = payload.text.length > 50 ? true : false;

        payload.colour
          ? (state.snackbar.colour = payload.colour)
          : (state.snackbar.colour = "primary");

        // If a custom timeout has been passed
        if (payload.timeout) {
          state.snackbar.timeout = payload.timeout;
        }

        state.snackbar.visible = true;
      } else {
        console.log("no payload received");
        // No payload passed, must be closing the snackbar, so reset all defaults
        state.snackbar.visible = false;
        state.snackbar.multiline = false;
        state.snackbar.timeout = 6000;
        state.snackbar.text = null;
      }
    },
    TOGGLE_DIALOG(state, payload = null) {
      if (payload) {
        state.dialog.message = payload.text;
        state.dialog.visible = true;
      } else {
        console.log("STATE HAS BEEN SET TO FALSE");
        state.dialog.message = null;
        state.dialog.visible = false;
      }
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
          console.log("username: " + response.data.name);

          // we did this in the old way:
          //this.$emit("login", response.data.token);

          // takes the name of the mutation and the new value
          context.commit("SET_LOGGED_IN_STATUS", true);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("name", response.data.name);
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
    toggleSnackbar(context, payload = null) {
      console.log("store toggle snackbar ran, payload is:");
      console.log(payload);
      context.commit("TOGGLE_SNACKBAR", payload);
    },
    toggleDialog(context, payload = null) {
      context.commit("TOGGLE_DIALOG", payload);
    },
  },
});
