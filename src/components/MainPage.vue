<template>
  <v-layout fluid class="fill-height">
    <v-system-bar color="grey-darken-3"> Lilly Lee </v-system-bar>
    <v-navigation-drawer theme="dark" location="left" permanent>
      <v-list>
        <v-list-item title="Home"></v-list-item>
        <v-list-item title="Github"></v-list-item>
        <v-list-item title="LinkedIn"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-bottom-navigation grow>
      <ContentControl/>
    </v-bottom-navigation> 
    <v-app-bar
      color="grey-darken-2"
      height="350"
      location="bottom"
      style="overflow: auto"
    >
      <ContentBar/>
    </v-app-bar>
    <v-main class="d-flex align-center justify-center">
      <ProfileCard />
    </v-main>
  </v-layout>
</template>

<script>
import ContentBar from "@/components/ContentBar.vue";
import ContentControl from "@/components/ContentControl.vue";
import ProfileCard from "@/components/ProfileCard.vue";
export default {
  name: "MainPage",
  components: { ContentBar, ContentControl, ProfileCard },
};
</script>
