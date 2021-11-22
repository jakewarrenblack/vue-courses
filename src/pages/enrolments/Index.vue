<template>
  <b-col>
    <h2>Welcome to the enrolments Index page</h2>
    <router-link :to="{ name: 'enrolments_add' }"
      ><v-btn>Add Enrolment</v-btn>
    </router-link>

    <hr />
    <p v-for="enrolment in enrolments" :key="enrolment.id">
      <router-link
        :to="{ name: 'enrolments_show', params: { id: enrolment.id } }"
        >{{ enrolment.course.title }}</router-link
      >
    </p>
  </b-col>
</template>

<script>
import axios from "axios";

export default {
  name: "EnrolmentsIndex",
  components: {},
  data() {
    return {
      enrolments: [],
      selectedEnrolment: null,
    };
  },
  mounted() {
    this.getData().then((res) => (this.enrolments = res));
  },
  methods: {
    async getData() {
      let token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `https://college-api-mo.herokuapp.com/api/enrolments`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.data[0]);
        return response.data.data;
      } catch (error) {
        return console.log(error);
      }
    },
  },
};
</script>
