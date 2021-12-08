<template>
  <v-container>
    <router-link :to="{ name: 'enrolments_add' }">
      <v-btn class="m-5 ml-0" color="secondary ">
        Add Enrolment
      </v-btn></router-link
    >

    <v-row>
      <v-col
        v-for="enrolment in enrolments"
        :key="enrolment.id"
        cols="12"
        sm="4"
      >
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <v-card-title>{{ enrolment.lecturer.name }}</v-card-title>

          <v-card-text>
            <div class="my-4 text-subtitle-1">
              Course {{ enrolment.course.title }}
            </div>

            <v-expansion-panels flat>
              <v-expansion-panel class="pl-0">
                <v-expansion-panel-header class="p-0"
                  >Read more</v-expansion-panel-header
                >
                <v-expansion-panel-content class="p-0 m-0">
                  {{ enrolment.course.description }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Status:</v-card-title>

          <v-card-text>
            <v-chip :class="`${enrolment.status}`">{{
              enrolment.status
            }}</v-chip>
          </v-card-text>

          <v-card-actions>
            <router-link
              :to="{ name: 'enrolments_show', params: { id: enrolment.id } }"
            >
              <v-btn color="deep-purple lighten-2" text> View </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-divider />
    <div class="text-center">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
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
  background: red !important;
  color: white !important;
}
.assigned {
  background: rgb(0, 141, 24) !important;
  color: white !important;
}
.career_break {
  background: rgb(0, 33, 141) !important;
  color: white !important;
}
.associate {
  background: rgb(129, 0, 141) !important;
  color: white !important;
}
/* Class of p-0 wouldn't override this */
.v-expansion-panel-content__wrap {
  padding: 0 !important;
}
</style>
