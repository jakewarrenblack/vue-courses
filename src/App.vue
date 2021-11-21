<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <router-link class="nav-link" to="/">Home</router-link>
      </v-list-item>
      <v-list-item>
        <router-link class="nav-link" :to="{ name: 'festivals_index' }"
          >Festivals</router-link
        >
      </v-list-item>
      <v-list-item>
        <router-link class="nav-link" :to="{ name: 'enrolments_index' }"
          >Enrolments</router-link
        >
      </v-list-item>
      <v-list-item>
        <router-link class="nav-link" :to="{ name: 'lecturers_index' }"
          >Lecturers</router-link
        >
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar app class="d-flex justify-space-between">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>RESTful College</v-toolbar-title>
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
