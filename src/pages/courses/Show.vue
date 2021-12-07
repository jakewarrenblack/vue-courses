<template>
  <v-layout>
    <v-col>
      <v-flex>
        <h1 class="m-auto text-center">{{ course.title }}</h1>
      </v-flex>
      <v-flex>
        <v-container>
          <hr />
          <p>
            {{ course.description }}
          </p>
          <p>
            {{ course.points }}
          </p>
          <p>
            {{ course.code }}
          </p>
          <v-btn class="mr-5" @click="deleteCourse(course.id)">Delete</v-btn>
          <router-link :to="{ name: 'courses_edit', params: { id: course.id } }"
            ><v-btn>Edit</v-btn>
          </router-link>
        </v-container>
      </v-flex>
    </v-col>
  </v-layout>
</template>

<script>
import axios from "axios";

export default {
  name: "coursesShow",
  components: {},
  data() {
    return {
      course: {},
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async deleteCourse(id) {
      let token = localStorage.getItem("token");
      await axios
        .delete(`https://college-api-mo.herokuapp.com/api/courses/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (response) => {
          console.log(response);
          alert("Success");
          // this.courses = response.data.data;
          //this.courses.pop()

          //await this.getData().then((res) => (this.courses = res));
        })
        .catch((error) => console.log(error));
    },
    getData() {
      let token = localStorage.getItem("token");
      axios
        .get(
          `https://college-api-mo.herokuapp.com/api/courses/${this.$route.params.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response);
          this.course = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("token");
          // this.$emit('invalid-token')
        });
    },
  },
};
</script>
