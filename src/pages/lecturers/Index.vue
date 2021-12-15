<template>
  <v-container class="my-5">
    <h2>All Lecturers</h2>
    <v-text-field
      class="ml-3 mr-3"
      label="Enter a lecturer name..."
      color="secondary"
      v-model="searchQuery"
      clearable
      @click:clear="clearSearch()"
    />
    <router-link :to="{ name: 'lecturers_add' }"
      ><v-btn>Add lecturer</v-btn>
    </router-link>

    <hr />

    <div v-if="filtered.length">
      <paginate
        name="lecturers"
        :per="6"
        :list="filtered"
        class="paginate-list"
      >
        <v-layout row wrap>
          <v-flex
            xs12
            sm6
            md3
            lg4
            v-for="lecturer in paginated('lecturers')"
            :key="lecturer.id"
          >
            <!-- Center text inside the card, margin 3 all around -->
            <v-card
              elevation="7"
              class="ma-3 d-flex justify-center flex-column align-center"
            >
              <v-responsive class="pt-4">
                <v-avatar size="100" class="primary lighten-3">
                  <!-- <v-icon class="lessEmphasis--text"></v-icon> -->
                  <v-img
                    :src="`https://avatars.dicebear.com/api/human/${lecturer.name}.svg`"
                  />
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading text-center">
                  {{ lecturer.name }}
                </div>
                <div class="grey--text text-center">{{ lecturer.phone }}</div>
              </v-card-text>
              <v-card-actions router>
                <v-btn
                  color="secondary"
                  :to="{ name: 'lecturers_show', params: { id: lecturer.id } }"
                >
                  <v-icon left>mdi-account-eye</v-icon>
                  <span>View</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </paginate>
    </div>

    <v-row>
      <div class="mx-auto text-center">
        <paginate-links
          :limit="6"
          :step-links="{
            next: '❯',
            prev: '❮',
          }"
          :show-step-links="true"
          style="width: 100%; justify-content: space-between"
          class="d-flex flex-row space-between"
          for="lecturers"
        ></paginate-links>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "coursesIndex",
  components: {},
  data() {
    return {
      searchQuery: "",
      lecturers: [],
      paginate: ["lecturers"],
      selectedCourse: null,
    };
  },
  computed: {
    filtered() {
      // Filter for both lecturer names and courses
      return this.lecturers.filter((lecturer) => {
        return lecturer.name
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    clearSearch() {
      this.searchQuery = "";
    },
    getData() {
      let token = localStorage.getItem("token");
      // If the user tries to come to this page while not logged in, send them back to the homepage
      if (!token || !this.loggedIn) {
        this.$router.push({ name: "home" });
        this.$store.dispatch("toggleSnackbar", {
          text: "Login to add lecturers",
          timeout: 6000,
        });
      }
      try {
        axios
          .get(`https://college-api-mo.herokuapp.com/api/lecturers`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res);
            this.lecturers = res.data.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        return console.log(error);
      }
    },
  },
};
</script>
<style>
ul.paginate-links {
  align-items: center;
  display: inline-flex;
  list-style-type: none;
  justify-content: center;
  margin: 0;
  max-width: 100%;
  width: 100%;
}
li.number > a,
.left-arrow,
.right-arrow {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 32px;
  width: 32px;
  margin: 0.3rem 10px;
}
.paginate-list {
  padding-left: 0 !important;
}
</style>
