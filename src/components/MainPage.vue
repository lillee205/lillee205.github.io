<template>
  <v-layout class="fill-height">
    <v-system-bar color="tertiary"> Last updated: July 2023 </v-system-bar>
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
    background: linear-gradient(-45deg, #385bb5, #b0275c, #2c9e89, #aed22e);
	  background-size: 400% 400%;
    width:100vw;
	  animation: gradient 15s ease infinite;
	 }
  
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

</style>