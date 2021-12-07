<template>
  <v-layout>
    <v-col>
      <v-flex>
        <h1 class="m-auto text-center">Enrolment view</h1>
      </v-flex>
      <v-flex>
        <v-container>
          <hr />
          <p>
            {{ enrolment.id }}
          </p>
          <p>
            {{ enrolment.status }}
          </p>
          <p>
            {{ enrolment.date }}
          </p>
          <p>
            {{ enrolment.time }}
          </p>
          <v-btn class="mr-5" @click="deleteEnrolment(enrolment.id)"
            >Delete</v-btn
          >
          <router-link
            :to="{ name: 'enrolments_edit', params: { id: enrolment.id } }"
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
