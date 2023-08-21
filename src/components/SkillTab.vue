<template>
  <v-container
    class="d-flex justify-center flex-wrap pa-0"
    style="overflow-y: auto; max-height: 350px"
    fill-width
  >
    <v-card
      v-for="(item, i) in info"
      :key="i"
      class="ma-4 pa-2"
      style="max-width: 250px"
      color="secondary"
    >
      <v-card-title class="mb-0">{{ item.title }}</v-card-title>
      <v-container class="pa-2 mt-0 pt-0">
        <v-chip
          v-for="(bullet, j) in item.bullets"
          :key="j"
          class="ma-1"
          size="small"
          color="accent"
        >
          {{ bullet }}
        </v-chip>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: "SkillTab",
  data() {
    return {
      info: [
        {
          title: "Technical Languages",
          bullets: ["Python", "Javascript", "Java", "Haskell", "Scala", "C++"],
        },
        {
          title: "Languages",
          bullets: ["English", "Korean", "Japanese (curr. learning)"],
        },
        {
          title: "Back End",
          bullets: [
            "Spring Boot",
            "Flask",
            "Firebase",
            "SQLAlchemy",
            "PostgreSQL",
          ],
        },
        {
          title: "Front End",
          bullets: ["HTML", "CSS", "Vue", "Vuetify", "React"],
        },
        {
          title: "Version Control",
          bullets: ["Git", "GitHub", "BitBucket"],
        },
        {
          title: "Misc",
          bullets: ["Jira", "Agile", "emacs", "graphic design", "Photoshop"],
        },
      ],
    };
  },
};
</script>
