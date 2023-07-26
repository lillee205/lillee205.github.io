<template >
    <v-layout fluid class="fill-height">
      <v-system-bar color="grey-darken-3">
        Lilly Lee
      </v-system-bar>
      <v-app-bar
        color="grey-darken-3"
        location="bottom">
      </v-app-bar>
      <v-navigation-drawer
        theme="dark"
        location="left"
        permanent>
        <v-list>
          <v-list-item title="a"></v-list-item>
          <v-list-item title="b"></v-list-item>
          <v-list-item title="c"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        color="grey-darken-2"
        height="500"
        location="bottom"
        style="overflow: auto">
        <ContentBar></ContentBar>
      </v-app-bar>
      <v-main 
        class="d-flex align-center justify-center" 
        >
            <ProfileCard/>
      </v-main>
    </v-layout>
</template>
 
<script>
  import ContentBar from '@/components/ContentBar.vue'
  import ProfileCard from '@/components/ProfileCard.vue'
  export default {
    name: "MainPage", 
    components: { ContentBar, ProfileCard }
  }
</script>
