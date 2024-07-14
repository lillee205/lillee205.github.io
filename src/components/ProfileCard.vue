<template>
  <v-card
    class="d-flex align-center pa-4 w-75 h-75 ma-2"
    style="min-width: 450px; max-width: 700px"
  >
    <div class="d-flex flex-no-wrap align-center">
      <v-img
        src="./../../public/megrass.jpeg"
        style="max-height: 250px"
      ></v-img>
      <div style="flex: 2">
        <div style="max-height: 20vh; overflow: scroll">
          <v-card-title style="margin-bottom: -8px">Lilly Lee</v-card-title>
          <v-card-subtitle style="margin-bottom: -8px"
            >Full-stack Software Engineer // Harvey Mudd College, Co
            2024</v-card-subtitle
          >
          <v-card-text>
            Currently working as a full-stack software engineer; former CS major 
            at Harvey Mudd College as of 2024. My
            specialty is webdev, including UI/UX design, frameworks, and
            creating backend services; however, I'm quick at picking up material
            on my own and take the initiative to learn new things (ex. creating
            programming languages & game dev). I'm also skilled at managing
            people from my various leadership experiences, and enjoy staying
            organized with agile methodologies and my trusty calendar, so if you
            need someone on top of her stuff (and emails), reach out!

          </v-card-text>
        </div>
        <v-container>
              <v-btn style="color: black" @click="copyEmail">lglee@hmc.edu</v-btn>
            <v-bottom-sheet v-model="sheet">
            <v-card content-class="customDialog">
              <v-card-text> Email copied to clipboard! </v-card-text>
            </v-card>
          </v-bottom-sheet>
        </v-container>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ProfileCard",
  data() {
    return {
      sheet: false
    }
  },
  methods: {
    copyEmail() {
      this.sheet = true;
      navigator.clipboard.writeText("lglee@hmc.edu");
    },
  },
};
</script>

<style scoped>
.v-card {
  background-color: #15131f;
  color: white;
}
.v-btn {
  background-color: #4dd6bd;
}
:deep .customDialog{
  position: absolute; bottom: 0;
}
</style>
