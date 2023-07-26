<template>
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
  <v-app-bar
    color="darkest"
    height="400"
    location="bottom"
    style="overflow: auto"
  >
    <v-window v-model="tab">
      <v-window-item value="projects">
        <ProjectTab />
      </v-window-item>
      <v-window-item value="skills"></v-window-item>
      <v-window-item value="about"></v-window-item>
    </v-window>
  </v-app-bar>
</template>

<script>
import ProjectTab from "@/components/ProjectTab.vue";

export default {
  name: "ContentControl",
  components: { ProjectTab },
  data() {
    return {
      tab: "projects",
    };
  },
};
</script>

<style scoped>
:deep(.v-tab__slider) {
  top: 0;
}
</style>
