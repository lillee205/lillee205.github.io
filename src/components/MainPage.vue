<template>
  <v-app class="fill-height">
    <v-system-bar color="tertiary"> Last updated: August 2023 </v-system-bar>
    <v-navigation-drawer color="primary" location="left" width="200" permanent>
      <!-- Sidebar -->
      <v-list>
        <v-list-item title="Home" prepend-icon="mdi-home"></v-list-item>
        <v-list-item
          class="link"
          title="Github"
          href="https://github.com/lillee205"
          prepend-icon="mdi-github"
        ></v-list-item>
        <v-list-item
          class="link"
          title="LinkedIn"
          href="https://www.linkedin.com/in/lillee205"
          prepend-icon="mdi-linkedin"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Switch tabs -->
    <v-app-bar location="bottom">
      <v-tabs
        v-model="tab"
        bg-color="tertiary"
        slider-color="accent"
        align-tabs="center"
        grow
      >
        <v-tab value="projects" prepend-icon="mdi-folder-multiple">
          Projects
        </v-tab>
        <v-tab value="skills" prepend-icon="mdi-star-cog"> Skills </v-tab>
        <v-tab value="about" prepend-icon="mdi-account"> More About Me </v-tab>
      </v-tabs>
    </v-app-bar>
    <!-- Content -->
    <v-main theme="light" class="main d-flex flex-column">
      <!-- Top half of content --> 
      <v-container 
        class="profileCard w-100 pa-0 d-flex align-center justify-center"
        style="flex: 1 0 auto;"
      >
        <ProfileCard />
      </v-container>
      <!-- Bottom half of content -->
      <v-container 
        fluid 
        class="content d-flex align-center justify-center"
        style="flex: 1 0 350;"
      >
      
        <v-window v-model="tab" class="h-100">
          <v-window-item value="projects" class="h-100">
            <ProjectTab/>
          </v-window-item>
          <v-window-item value="skills" class="h-100">
            <SkillTab />
          </v-window-item>
          <v-window-item value="about" class="h-100">
            <AboutTab />
          </v-window-item>
        </v-window>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue";
import ProjectTab from "@/components/ProjectTab.vue";
import SkillTab from "@/components/SkillTab.vue";
import AboutTab from "@/components/AboutTab.vue";

export default {
  name: "MainPage",
  components: { ProjectTab, SkillTab, AboutTab, ProfileCard },
  data() {
    return {
      tab: "projects",
    };
  },
};
</script>

<style scoped>
.main {
  background: linear-gradient(-45deg, #385bb5, #b0275c, #2c9e89, #aed22e);
  background-size: 400% 400%;
  width: 100vw;
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
.link:hover {
  transition: ease 100ms background;
  background: #424d60;
  cursor: pointer;
}

:deep(.v-tab__slider) {
  top: 0;
}

.content {
  background-color: #0c0c12;
}
</style>
