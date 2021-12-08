<template>
  <v-container>
    <router-link :to="{ name: 'courses_add' }">
      <v-btn class="m-5 ml-0" color="secondary ">
        Add Course
      </v-btn></router-link
    >
    <paginate name="courses" :per="6" :list="courses" class="paginate-list">
      <v-row>
        <v-col
          v-for="course in paginated('courses')"
          :key="course.id"
          cols="12"
          sm="4"
        >
          <v-card :loading="loading" class="mx-auto my-12 mt-4" max-width="374">
            <v-card-title>{{ course.title }}</v-card-title>

            <v-card-text>
              <div class="my-4 text-subtitle-1">Level {{ course.level }}</div>

              <v-expansion-panels flat>
                <v-expansion-panel>
                  <v-expansion-panel-header class="p-0"
                    >Read more</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    {{ course.description }}
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Course code:</v-card-title>

            <v-card-text>
              <v-chip>{{ course.code }}</v-chip>
            </v-card-text>

            <v-card-actions>
              <router-link
                :to="{ name: 'courses_show', params: { id: course.id } }"
              >
                <v-btn color="deep-purple lighten-2" text @click="reserve">
                  View
                </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </paginate>
    <v-divider />
    <!-- <div class="text-center">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div> -->
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
          for="courses"
        ></paginate-links>
      </div>
    </v-row>
    <br />
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.getData();
  },
  data() {
    return {
      filteredItems: [],
      search: "",
      courses: [],
      paginate: ["courses"],
    };
  },
  methods: {
    getData() {
      let token = localStorage.getItem("token");
      try {
        axios
          .get(`https://college-api-mo.herokuapp.com/api/courses`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res);
            this.courses = res.data.data;
            for (var course in this.courses) {
              // Want them all to be selectable, have to add this to each of them for the table
              course.isSelectable = true;
            }
          });
      } catch (error) {
        return console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.v-expansion-panel-content >>> .v-expansion-panel-content__wrap {
  padding: 0 !important;
}
</style>

<!-- Seems stupid, but scoped style won't work for them -->
<style>
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
