<template>
  <v-btn value="recent">
    <v-icon>mdi-folder-multiple</v-icon>
    Projects
  </v-btn>

  <v-btn value="favorites">
    <v-icon>mdi-star-cog</v-icon>
    Skills
  </v-btn>

  <v-btn value="nearby">
    <v-icon>mdi-account</v-icon>
    More about me
  </v-btn>
</template>

<script>
export default {
  name: "ContentControl",
};
</script>
