<template>
  <v-slide-group ref="slideGroup" show-arrows center-active>
    <v-slide-group-item v-for="(item, i) in items" :key="i" v-slot="{ toggle }">
      <v-card
        class="ma-2 d-flex flex-column"
        height="220"
        color="secondary"
        :width="cardWidth"
        rounded
        @click="toggle"
      >
        <v-card-title
          >{{ item.title }}
          <v-icon icon="mdi-open-in-new" size="x-small" end @click="toLink(item.link)"></v-icon
        ></v-card-title>
        <v-card-text> {{ item.desc }} </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-container class="d-flex flex-wrap ma-0 pa-0">
          <v-chip v-for="(skill, j) in item.skills" :key="j" class="ma-1" size="x-small">
            {{ skill }}
          </v-chip>
                  </v-container>

        </v-card-actions>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script>
export default {
  name: "ProjectTab",
  data() {
    return {
      page: 1,
      items: [
        {
          title: "github page",
          desc: "Code for the site you're looking at right now!",
          skills: ["Vue", "Vuetify", "JS"],
          link: "",
        },
        {
          title: "coding with wally",
          desc: "A coding site akin to CodingBat specifically for Harvey Mudd's introductory CS class",
          skills: ["HTML", "CSS", "JS", "Python", "Flask", "SQLAlchemy"],
          link: "https://github.com/lillee205/codingwithwally",
        },
      ],
      cardWidth: 300,
    };
  },
  mounted() {
    this.cardWidth = this.$refs.slideGroup.$el.clientWidth / 4;
  },
  methods: {
    toLink(link) {
      window.open(link, '_blank'); 
    }
  }
};
</script>
