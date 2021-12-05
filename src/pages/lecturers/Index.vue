<template>
  <b-col>
    <h2>Welcome to the lecturers Index page</h2>
    <router-link :to="{ name: 'festivals_add' }"
      ><v-btn>Add lecturer</v-btn>
    </router-link>

    <hr />
    <p v-for="lecturer in lecturers" :key="lecturer.id">
      <router-link
        :to="{ name: 'lecturers_show', params: { id: lecturer.id } }"
        >{{ lecturer.name }}</router-link
      >
    </p>
  </b-col>
</template>

<script>
import axios from "axios";

export default {
  name: "FestivalsIndex",
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
