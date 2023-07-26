<template>
  <v-container fill-height fill-width fluid>
    <v-row align="center">
      <v-col v-for="(group, i) in info" :key="i" align-self="center">
        <v-row v-for="(entry, j) in group" :key="j" justify="center">
          <v-card>
            <v-card-title>{{ entry.title }}</v-card-title>
            <v-card-text>
              <v-container class="pt-0 pb-0">
                <ul>
                  <li v-for="(bullet, k) in entry.bullets" :key="k">
                    {{ bullet }}
                  </li>
                </ul>
              </v-container>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SkillTab",
  data() {
    return {
      info: [
        [
          {
            title: "Technical Languages",
            bullets: [
              "Python",
              "Javascript",
              "Java",
              "Haskell",
              "Scala",
              "C++",
            ],
          },
          {
            title: "Languages",
            bullets: ["English", "Korean", "Japanese"],
          },
        ],
        [
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
        ],
        [
          {
            title: "Version Control",
            bullets: ["Git, GitHub, BitBucket"],
          },
          {
            title: "Misc",
            bullets: ["Jira", "Agile", "emacs", "graphic design", "Photoshop"],
          },
        ],
      ],
    };
  },
};
</script>
