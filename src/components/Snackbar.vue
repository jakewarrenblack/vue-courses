<template>
  <v-snackbar
    top
    :color="snackbar.colour"
    v-model="snackbar.visible"
    :timeout="snackbar.timeout"
    :multi-line="snackbar.multiline"
  >
    {{ snackbar.message }}

    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="toggleSnackbar()">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "Snackbar",
  computed: {
    snackbar() {
      return this.$store.state.snackbar;
    },
  },
  methods: {
    //...mapActions(["toggleSnackbar"]),
    toggleSnackbar() {
      this.$store.dispatch("toggleSnackbar");
    },
  },
};
</script>
