<template>
  <v-layout>
    <v-row class="w-100">
      <v-col class="m-auto mt-10" lg="5" sm="12">
        <v-card class="mx-auto">
          <v-card-text>
            <v-chip>{{ enrolment.status }}</v-chip>
            <br />
            <br />
            <p class="text-h2 text--primary">{{ enrolment.course.title }}</p>
            <v-divider />
            <br />
            <div class="text--primary">
              {{ enrolment.course.description }}
            </div>
            <br />
            <v-list-item class="pl-0" two-line>
              <v-list-item-content>
                <v-list-item-title>Course Level</v-list-item-title>
                <v-list-item-subtitle>{{
                  enrolment.course.level
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="pl-0" two-line>
              <v-list-item-content>
                <v-list-item-title>CAO Points</v-list-item-title>
                <v-list-item-subtitle>{{
                  enrolment.course.points
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="pl-0" two-line>
              <v-list-item-content>
                <v-list-item-title>date</v-list-item-title>
                <v-list-item-subtitle>{{
                  enrolment.date
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="pl-0" two-line>
              <v-list-item-content>
                <v-list-item-title>Time</v-list-item-title>
                <v-list-item-subtitle>{{
                  enrolment.time
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
          <v-card-actions>
            <router-link
              :to="{
                name: 'enrolments_edit',
                params: { id: enrolment.id },
              }"
            >
              <v-btn text color="deep-purple accent-4">Edit</v-btn>
            </router-link>
            <v-btn
              @click="deleteEnrolment(enrolment.id)"
              text
              color="deep-purple accent-4"
              >Delete</v-btn
            >
          </v-card-actions>

          <v-card-text v-if="enrolment.lecturer.length > 0">
            <v-divider />
            <p class="text-h4 text--primary">Lecturer info</p>
          </v-card-text>
          <v-row>
            <v-col lg="12" class="">
              <v-card class="m-3 pb-2">
                <div class="d-flex flex-column justify-space-between">
                  <v-card-title class="text-h5">{{
                    enrolment.lecturer.name
                  }}</v-card-title>

                  <v-expansion-panels flat accordion>
                    <v-expansion-panel>
                      <v-expansion-panel-header class="pl-6"
                        >Details</v-expansion-panel-header
                      >
                      <v-expansion-panel-content>
                        <v-list-item class="pl-0" two-line>
                          <v-list-item-content>
                            <v-list-item-title>Email</v-list-item-title>
                            <v-list-item-subtitle>{{
                              enrolment.lecturer.email
                            }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item class="pl-0" two-line>
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
                        name: 'lecturers_show',
                        params: { id: enrolment.lecturer.id },
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
    <v-row></v-row>
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
      // If the user tries to come to this page while not logged in, send them back to the homepage
      if (!token) {
        this.$router.push({ name: "home" });
        this.$router.push({ name: "home" });
        this.$store.dispatch("toggleSnackbar", {
          text: "Login to view enrolments",
          timeout: 6000,
        });
      }
      await axios
        .delete(`https://college-api-mo.herokuapp.com/api/enrolments/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (response) => {
          console.log(response);
          this.$router.push({ name: "enrolments_index" });
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
