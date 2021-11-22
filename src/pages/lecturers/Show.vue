<template>
  <b-col>
    <v-btn class="mr-5" @click="deletelecturer(lecturer.id)">Delete</v-btn>
    <router-link :to="{ name: 'lecturers_edit', params: { id: lecturer.id } }"
      ><v-btn>Edit</v-btn>
    </router-link>
    <hr />
    <h2>lecturer page</h2>

    <p>
      {{ lecturer.name }}
    </p>
    <p>
      {{ lecturer.email }}
    </p>
    <p>
      {{ lecturer.address }}
    </p>
    <p>
      {{ lecturer.phone }}
    </p>
  </b-col>
</template>

<script>
import axios from "axios";

export default {
  name: "LecturersShow",
  components: {},
  data() {
    return {
      lecturer: {},
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async deletelecturer(id) {
      let token = localStorage.getItem("token");
      await axios
        .delete(`https://college-api-mo.herokuapp.com/api/lecturers/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (response) => {
          console.log(response);
          alert("Success");
          // this.lecturers = response.data.data;
          //this.lecturers.pop()

          //await this.getData().then((res) => (this.lecturers = res));
        })
        .catch((error) => console.log(error));
    },
    getData() {
      let token = localStorage.getItem("token");
      axios
        .get(
          `https://college-api-mo.herokuapp.com/api/lecturers/1${this.$route.params.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response);
          this.lecturer = response.data.data;
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
