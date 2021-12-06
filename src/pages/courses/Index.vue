<template>
  <v-container class="my-5">
    <h2>All Courses</h2>
    <router-link :to="{ name: 'courses_add' }"
      ><v-btn>Add Course</v-btn>
    </router-link>
    <hr />
    <!-- pa = padding 'all' -->
    <v-card
      v-for="course in courses"
      :key="course.id"
      flat
      class="pa-3 mb-5 course"
    >
      <router-link :to="{ name: 'courses_show', params: { id: course.id } }">
        <!-- elements will wrap if not enough space -->
        <v-layout row wrap>
          <!-- mobile - full width, desktop - half width -->
          <v-flex xs12 md6>
            <div class="caption grey--text">Course title</div>
            <div>{{ course.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Course Code</div>
            <div>{{ course.code }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Points</div>
            <div>{{ course.points }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Level</div>
            <div>{{ course.level }}</div>
          </v-flex>
        </v-layout>
      </router-link>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "coursesIndex",
  components: {},
  data() {
    return {
      courses: [],
      selectedCourse: null,
    };
  },
  async created() {
    await this.getData().then((res) => (this.courses = res));
  },
  methods: {
    async getData() {
      let token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `https://college-api-mo.herokuapp.com/api/courses`,
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
