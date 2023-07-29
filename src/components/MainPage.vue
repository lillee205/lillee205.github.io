<template>
  <v-app class="fill-height" >
    <v-system-bar color="tertiary"> Last updated: July 2023 </v-system-bar>
    <v-navigation-drawer color="primary" location="left" width="200" permanent>
      <v-list >
        <v-list-item title="Home" prepend-icon="mdi-home"></v-list-item>
        <v-list-item class="link" title="Github" href="https://github.com/lillee205" prepend-icon="mdi-github"></v-list-item>
        <v-list-item class="link" title="LinkedIn" href="https://www.linkedin.com/in/lillee205" prepend-icon="mdi-linkedin"></v-list-item>
      </v-list>
    </v-navigation-drawer>

      <ContentControl/>

    <v-main class="d-flex align-center justify-center" style="min-height:300px;min-width:1400px;">
      <ProfileCard />
    </v-main>
  </v-app>
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
  .link {
    transition: 100ms ease background;
  }
  .link:hover{
    transition: ease 100ms background;
    background:#424d60;
    cursor: pointer;
  }

</style>