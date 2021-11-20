<template>
  <b-col>
    <h2>course page</h2>
    <hr />

    <p>
      {{ course.title }}
    </p>
    <p>
      {{ course.description }}
    </p>
  </b-col>
</template>

<script>
import axios from "axios";

export default {
  name: "FestivalsShow",
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
