<template>
  <b-col>
    <button @click="deleteEnrolment(enrolment.id)">Delete</button>
    <router-link :to="{ name: 'enrolments_edit', params: { id: enrolment.id } }"
      ><button>Edit</button>
    </router-link>
    <hr />
    <h2>course page</h2>

    <p>
      {{ enrolment.course.title }}
    </p>
    <p>
      {{ enrolment.course.description }}
    </p>
  </b-col>
</template>

<script>
import axios from "axios";

export default {
  name: "EnrolmentsShow",
  components: {},
  data() {
    return {
      enrolment: {},
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async deleteEnrolment(id) {
      let token = localStorage.getItem("token");
      await axios
        .delete(`https://college-api-mo.herokuapp.com/api/enrolments/${id}`, {
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
          `https://college-api-mo.herokuapp.com/api/enrolments/${this.$route.params.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response);
          this.enrolment = response.data.data;
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
