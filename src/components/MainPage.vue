<template>
  <v-layout fluid class="fill-height">
    <v-system-bar color="tertiary"> Lilly Lee </v-system-bar>
    <v-navigation-drawer color="primary" location="left" permanent>
      <v-list>
        <v-list-item title="Home" prepend-icon="mdi-home" value="home"></v-list-item>
        <v-list-item title="Github" prepend-icon="mdi-github" value="gh"></v-list-item>
        <v-list-item title="LinkedIn" prepend-icon="mdi-linkedin" value="li"></v-list-item>
      </v-list>
    </v-navigation-drawer>

      <ContentControl/>

    <v-main class="d-flex align-center justify-center">
      <ProfileCard />
    </v-main>
  </v-layout>
</template>

<script>
import ContentControl from "@/components/ContentControl.vue";
import ProfileCard from "@/components/ProfileCard.vue";
export default {
  name: "MainPage",
  components: { ContentControl, ProfileCard },
};
</script>

<style scoped>
  .v-main {
    background: linear-gradient(#4DD6BD,#191A27 40%);
  }
</style>