<template>
  <v-container>
    <v-text-field
      class="ml-3 mr-3"
      label="Search a lecturer name or course title..."
      color="secondary"
      v-model="searchQuery"
    />
    <router-link :to="{ name: 'enrolments_add' }">
      <v-btn class="m-5 ml-0" color="secondary ">
        Add Enrolment
      </v-btn></router-link
    >

    <paginate name="enrolments" :per="6" :list="filtered" class="paginate-list">
      <v-row>
        <v-col
          v-for="enrolment in paginated('enrolments')"
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
    </paginate>
    <v-divider />
    <v-row>
      <div class="mx-auto text-center">
        <paginate-links
          :limit="6"
          :step-links="{
            next: '❯',
            prev: '❮',
          }"
          :show-step-links="true"
          style="width: 100%; justify-content: space-between"
          class="d-flex flex-row space-between"
          for="enrolments"
        ></paginate-links>
      </div>
    </v-row>
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
      paginate: ["enrolments"],
      selectedEnrolment: null,
      searchQuery: "",
    };
  },
  computed: {
    filtered() {
      // Filter for both lecturer names and courses
      return this.enrolments.filter((enrolment) => {
        return (
          enrolment.lecturer.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          enrolment.course.title
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        );
      });
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let token = localStorage.getItem("token");
      // If the user tries to come to this page while not logged in, send them back to the homepage
      if (!token) {
        this.$router.push({ name: "home" });
      }
      try {
        axios
          .get(`https://college-api-mo.herokuapp.com/api/enrolments`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res.data.data[0]);
            this.enrolments = res.data.data;
          })
          .catch((err) => {
            console.log(err);
          });
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

ul.paginate-links {
  align-items: center;
  display: inline-flex;
  list-style-type: none;
  justify-content: center;
  margin: 0;
  max-width: 100%;
  width: 100%;
}
li.number > a,
.left-arrow,
.right-arrow {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 32px;
  width: 32px;
  margin: 0.3rem 10px;
}
.paginate-list {
  padding-left: 0 !important;
}
</style>
