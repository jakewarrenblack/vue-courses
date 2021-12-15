<template>
  <v-layout>
    <Dialog :lecturer="lecturer" />
    <v-row class="w-100">
      <v-col class="m-auto mt-10" lg="5" sm="12">
        <v-card elevation="7" class="mx-auto">
          <v-card-text>
            <v-chip>ID: {{ lecturer.id }}</v-chip>
            <br />
            <br />
            <p class="text-h2 text--primary">{{ lecturer.name }}</p>
            <v-divider />
            <br />
            <v-list-item class="pl-0" two-line>
              <v-list-item-content>
                <v-list-item-title>Email Level</v-list-item-title>
                <v-list-item-subtitle>{{
                  lecturer.email
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="pl-0" two-line>
              <v-list-item-content>
                <v-list-item-title>Address</v-list-item-title>
                <v-list-item-subtitle>{{
                  lecturer.address
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="pl-0" two-line>
              <v-list-item-content>
                <v-list-item-title>Phone</v-list-item-title>
                <v-list-item-subtitle>{{
                  lecturer.phone
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
          <v-card-actions class="ml-2">
            <router-link
              :to="{
                name: 'lecturers_edit',
                params: { id: lecturer.id },
              }"
            >
              <v-btn color="secondary">Edit</v-btn>
            </router-link>
            <v-btn @click="showDialog()" color="error" class="ml-4"
              >Delete</v-btn
            >
          </v-card-actions>

          <br />

          <v-card-text v-if="lecturer.enrolments.length > 0">
            <v-divider />
            <p class="text-h4 text--primary">Enrolments</p>
          </v-card-text>
          <v-row>
            <v-col
              v-for="enrolment in lecturer.enrolments"
              :key="enrolment.id"
              sm="12"
              lg="6"
              class=""
            >
              <v-card elevation="7" class="m-3 pb-2">
                <div class="d-flex flex-column justify-space-between">
                  <v-card-title fill-width class="text-h5 pl-6">
                    <v-chip class="mr-4" :class="`${enrolment.status}`">{{
                      enrolment.status
                    }}</v-chip>
                  </v-card-title>
                  <v-card-title fill-width class="text-h5 pl-6">
                    {{ enrolment.course.title }}
                  </v-card-title>

                  <v-expansion-panels flat accordion>
                    <v-expansion-panel>
                      <v-expansion-panel-header class="pl-6"
                        >Details</v-expansion-panel-header
                      >
                      <v-expansion-panel-content>
                        <v-list-item class="pl-5" two-line>
                          <v-list-item-content>
                            <v-list-item-title>Course code</v-list-item-title>
                            <v-list-item-subtitle>{{
                              enrolment.course.code
                            }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item class="pl-5" two-line>
                          <v-list-item-content>
                            <v-list-item-title>CAO points</v-list-item-title>
                            <v-list-item-subtitle>{{
                              enrolment.course.points
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
    <v-row></v-row>
  </v-layout>
</template>

<script>
import axios from "axios";
import Dialog from "@/components/Dialog";

export default {
  name: "LecturersShow",
  components: { Dialog },
  data() {
    return {
      lecturer: {},
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    showDialog() {
      this.$store.dispatch("toggleDialog", {
        text:
          this.lecturer.enrolments.length != 0
            ? "All enrolments for this lecturer will also be deleted"
            : "This lecturer will be permanently deleted",
        visible: true,
      });
    },
    getData() {
      let token = localStorage.getItem("token");
      // If the user tries to come to this page while not logged in, send them back to the homepage
      if (!token || !this.loggedIn) {
        this.$router.push({ name: "home" });
        this.$store.dispatch("toggleSnackbar", {
          text: "Login to view lecturers",
          timeout: 6000,
        });
      }
      axios
        .get(
          `https://college-api-mo.herokuapp.com/api/lecturers/${this.$route.params.id}`,
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
          //localStorage.removeItem("token");
          // this.$emit('invalid-token')
        });
    },
  },
};
</script>
<style scoped>
/* .v-expansion-panel-content__wrap {
  padding-left: 0 !important;
} */
</style>
