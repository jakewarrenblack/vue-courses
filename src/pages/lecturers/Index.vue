<template>
  <v-container class="my-5">
    <h2>All Lecturers</h2>
    <router-link :to="{ name: 'courses_add' }"
      ><v-btn>Add lecturer</v-btn>
    </router-link>

    <hr />

    <v-layout row wrap>
      <v-flex xs12 sm6 md3 lg4 v-for="lecturer in lecturers" :key="lecturer.id">
        <!-- Center text inside the card, margin 3 all around -->
        <v-card class="ma-3 d-flex justify-center flex-column align-center">
          <v-responsive class="pt-4">
            <v-avatar size="100" class="primary lighten-3">
              <v-icon class="lessEmphasis--text">mdi-account</v-icon>
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
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "coursesIndex",
  components: {},
  data() {
    return {
      lecturers: [],
      selectedCourse: null,
    };
  },
  async created() {
    await this.getData().then((res) => (this.lecturers = res));
  },
  methods: {
    async getData() {
      let token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `https://college-api-mo.herokuapp.com/api/lecturers`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        return response.data.data;
      } catch (error) {
        return console.log(error);
      }
    },
  },
};
</script>
