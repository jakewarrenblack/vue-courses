<template>
  <!-- v-app needs to be the root in App.vue, acts as mounting point for Vuetify -->
  <v-app id="inspire">
    <!-- 'app' prop makes position fixed -->
    <v-navigation-drawer
      class="grey darken-3 navigation-drawer"
      v-model="drawer"
      app
      temporary
      clipped
      disable-resize-watcher
    >
      <v-list-item>
        <router-link class="nav-link mb-5" to="/">
          <v-btn depressed class="green white--text">
            <v-icon left>mdi-home</v-icon>
            <span>Home</span>
          </v-btn></router-link
        >
      </v-list-item>
      <v-list-item>
        <router-link class="nav-link mb-5" :to="{ name: 'festivals_index' }">
          <v-btn depressed class="green white--text">
            <v-icon left>mdi-school</v-icon>
            <span>Courses</span>
          </v-btn>
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link class="nav-link mb-5" :to="{ name: 'enrolments_index' }">
          <v-btn depressed class="green white--text">
            <v-icon left>mdi-book-open-blank-variant</v-icon>
            <span>Enrolments</span>
          </v-btn>
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link class="nav-link" :to="{ name: 'lecturers_index' }">
          <v-btn depressed class="green white--text">
            <v-icon left>mdi-account-multiple</v-icon>
            <span>Lecturers</span>
          </v-btn>
        </router-link>
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- Change drawer to opposite value to open/close the navigation drawer -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>College management system</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="$store.state.loggedIn"
        @click="logout()"
        class="v-btn secondary"
        >Log Out</v-btn
      >
    </v-app-bar>

    <v-main>
      <br />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
  methods: {
    logOut() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
v-main {
  margin: 1rem;
  padding: 5rem;
}
</style>
.
