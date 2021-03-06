<template>
  <v-layout>
    <Dialog :course="course" />
    <v-row class="w-100">
      <v-col class="m-auto mt-10" lg="5" sm="12">
        <v-card elevation="7" class="mx-auto">
          <v-card-text>
            <v-chip>{{ course.code }}</v-chip>
            <br />
            <br />
            <p class="text-h2 text--primary">{{ course.title }}</p>
            <v-divider />
            <br />
            <div class="text--primary">
              {{ course.description }}
            </div>
            <br />
            <v-list-item class="pl-0" two-line>
              <v-list-item-content>
                <v-list-item-title>Course Level</v-list-item-title>
                <v-list-item-subtitle>{{ course.level }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="pl-0" two-line>
              <v-list-item-content>
                <v-list-item-title>CAO Points</v-list-item-title>
                <v-list-item-subtitle>{{ course.points }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
          <v-card-actions>
            <router-link
              :to="{
                name: 'courses_edit',
                params: { id: course.id },
              }"
            >
              <v-btn color="secondary">Edit</v-btn>
            </router-link>
            <v-btn @click="showDialog()" color="error" class="ml-4" dark>
              Delete
            </v-btn>
          </v-card-actions>

          <br />

          <v-card-text v-if="course.enrolments.length > 0">
            <v-divider />
            <p class="text-h4 text--primary">Enrolments for this course</p>
          </v-card-text>
          <v-row>
            <v-col
              v-for="enrolment in course.enrolments"
              :key="enrolment.id"
              sm="12"
              lg="6"
              class=""
            >
              <v-card elevation="7" class="m-3 pb-2">
                <div class="d-flex flex-column justify-space-between">
                  <v-card-title class="text-h5 pl-6">{{
                    enrolment.lecturer.name
                  }}</v-card-title>

                  <v-expansion-panels flat accordion>
                    <v-expansion-panel>
                      <v-expansion-panel-header
                        >Details</v-expansion-panel-header
                      >
                      <v-expansion-panel-content>
                        <v-list-item class="pl-5" two-line>
                          <v-list-item-content>
                            <v-list-item-title>Status</v-list-item-title>
                            <v-list-item-subtitle>{{
                              enrolment.status
                            }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item class="pl-5" two-line>
                          <v-list-item-content>
                            <v-list-item-title>Email</v-list-item-title>
                            <v-list-item-subtitle>{{
                              enrolment.lecturer.email
                            }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item class="pl-5" two-line>
                          <v-list-item-content>
                            <v-list-item-title>Phone</v-list-item-title>
                            <v-list-item-subtitle>{{
                              enrolment.lecturer.phone
                            }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>

                  <v-card-actions>
                    <router-link
                      :to="{
                        name: 'enrolments_show',
                        params: { id: enrolment.id },
                      }"
                    >
                      <v-btn class="ml-2 mt-5" outlined rounded small>
                        View
                      </v-btn>
                    </router-link>
                  </v-card-actions>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import axios from "axios";
import Dialog from "@/components/Dialog";
import { mapState } from "vuex";
export default {
  name: "coursesShow",
  data() {
    return {
      course: {},
    };
  },
  components: {
    Dialog,
  },
  mounted() {
    this.getData();
  },
  computed: {
    ...mapState(["loggedIn"]),
  },
  created() {
    document.title = "View Course";
  },
  methods: {
    showDialog() {
      this.$store.dispatch("toggleDialog", {
        text:
          this.course.enrolments.length != 0
            ? "All enrolments for this course will also be deleted"
            : "This course will be permanently deleted",
        visible: true,
      });
    },
    getData() {
      let token = localStorage.getItem("token");
      if (!token || !this.loggedIn) {
        this.$router.push({ name: "home" });

        this.$store.dispatch("toggleSnackbar", {
          text: "Login to view courses",
          timeout: 6000,
        });
      }
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
