<template>
  <v-container class="my-5">
    <h2>All Enrolments</h2>
    <router-link :to="{ name: 'enrolments_add' }"
      ><v-btn>Add Enrolment</v-btn>
    </router-link>
    <hr />
    <!-- pa = padding 'all' -->
    <v-card
      v-for="enrolment in enrolments"
      :key="enrolment.id"
      flat
      :class="`pa-3 pl-8 mb-5 course ${enrolment.status}`"
    >
      <router-link
        :to="{ name: 'enrolments_show', params: { id: enrolment.id } }"
      >
        <!-- elements will wrap if not enough space -->
        <v-layout row wrap>
          <!-- mobile - full width, desktop - half width -->
          <v-flex xs12 md6>
            <div class="caption grey--text">Course title</div>
            <div>{{ enrolment.course.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Lecturer name</div>
            <div>{{ enrolment.lecturer.name }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Date</div>
            <div>{{ enrolment.date }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Status</div>
            <div>{{ enrolment.status }}</div>
          </v-flex>
        </v-layout>
      </router-link>
    </v-card>
  </v-container>
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
<style>
.interested {
  border-left: 4px solid red !important;
}
.assigned {
  border-left: 4px solid rgb(0, 141, 24) !important;
}
.career_break {
  border-left: 4px solid rgb(0, 33, 141) !important;
}
.associate {
  border-left: 4px solid rgb(129, 0, 141) !important;
}
</style>
