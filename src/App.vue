<template>
  <!-- v-app needs to be the root in App.vue, acts as mounting point for Vuetify -->
  <v-app id="inspire">
    <!-- 'app' prop makes position fixed -->
    <v-navigation-drawer
      class="primary navigation-drawer"
      v-model="drawer"
      app
      temporary
      clipped
      disable-resize-watcher
    >
      <v-list class="d-flex flex-column fill-height">
        <div>
          <v-list-item
            class="d-flex flex-column justify-center text-center mt-2"
          >
            <h3 class="lessEmphasis--text">College Dashboard</h3>
          </v-list-item>

          <!-- router props means the vue-router is invoked when this element is created, it's a router link -->
          <v-list-item
            class="mb-5 secondary m-3 rounded"
            v-for="link in links"
            :key="link"
            router
            :to="{ name: `${link.route}` }"
          >
            <v-list-tile-action>
              <v-icon left class="lessEmphasis--text">{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-action>
              <v-list-tile-title class="lessEmphasis--text">
                {{ link.text }}
              </v-list-tile-title>
            </v-list-tile-action>
          </v-list-item>
        </div>
        <div class="mt-auto">
          <v-list-item class="mb-5 secondary m-3 rounded" @click="logOut()">
            <v-list-tile-action>
              <v-icon left class="lessEmphasis--text">mdi-exit-to-app</v-icon>
            </v-list-tile-action>
            <v-list-tile-action>
              <v-list-tile-title class="lessEmphasis--text">
                Logout
              </v-list-tile-title>
            </v-list-tile-action>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- Change drawer to opposite value to open/close the navigation drawer -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>College management system</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="$store.state.loggedIn"
        @click="logOut()"
        class="v-btn secondary"
        >Log Out</v-btn
      >
    </v-app-bar>

    <v-main>
      <br />
      <router-view class="" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      { icon: "mdi-home", text: "Home", route: "home" },
      { icon: "mdi-school", text: "Courses", route: "courses_index" },
      {
        icon: "mdi-book-open-blank-variant",
        text: "Enrolments",
        route: "enrolments_index",
      },
      {
        icon: "mdi-account-multiple",
        text: "Lecturers",
        route: "lecturers_index",
      },
    ],
  }),

  methods: {
    logOut() {
      this.$store.dispatch("logout");
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
v-main {
  margin: 1rem;
  padding: 5rem;
}
.nav-link {
  width: 100%;
}
</style>
.
