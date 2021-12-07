<template>
  <v-container>
    <v-row>
      <v-col v-for="course in courses" :key="course.id" cols="12" sm="4">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
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
    <v-divider />
    <div class="text-center">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
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
      rowsPerPageItems: [4, 8, 12],
      itemsPerPage: 4,
      pagination: {
        rowsPerPage: 4,
      },
      filteredItems: [],
      search: "",
      courses: [],
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
.row_class {
  background: red;
}
.v-expansion-panel-content >>> .v-expansion-panel-content__wrap {
  padding: 0 !important;
}
</style>
