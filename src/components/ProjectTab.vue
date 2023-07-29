<template>

  <v-slide-group ref="slideGroup" show-arrows center-active>
    <v-slide-group-item v-for="(item, i) in items" :key="i" v-slot="{ toggle }">
      <v-card
        class="ma-2 d-flex flex-column"
        style="max-height:300px;"
        color="secondary"
        width="300"
        rounded
        @click="toggle"
      >
        <v-img
          :src="item.pic ? item.pic : 'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
          max-height="100"
          width="300"
          cover
        ></v-img>
        <v-card-title
          >{{ item.title }}
          <v-icon
            icon="mdi-open-in-new"
            size="x-small"
            end
            @click="toLink(item.link)"
          ></v-icon
        ></v-card-title>
        <v-card-text style="overflow-y:auto;"> {{ item.desc }} </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-container class="d-flex flex-wrap ma-0 pa-0">
            <v-chip
              v-for="(skill, j) in item.skills"
              :key="j"
              class="ma-1"
              size="x-small"
              color="accent"
            >
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
          pic:"./../projects/codingWithWally.png"
        },
        {
          title: "weSearch",
          desc: "A web-app for efficient organization and communication when forming search parties for missing people. Won 1st place in the 2019 Congressional App Challenge.",
          skills: ["HTML", "CSS", "JS", "Node", "Firebase"], 
          link: "https://www.youtube.com/watch?v=RXJaR72ju3g",
          pic: "./../projects/weSearch.png"

        }, {
          title: "coloringBook",
          desc: "Uses Pillow to detect outlines of the line art on a coloring page, and fills space in with specified color.",
          skills: ["Flask", "Pillow", "HTML canvas"],
          link: "https://github.com/lillee205/coloringBook",
          pic: "./../projects/coloringBook.png"
        }, {
          title: "DonKaScript",
          desc: "Simple website that parses plain text taiko (Japanese percussion) language to sheet music. Uses Quill to allow for rich text formatting, Peggy to create the grammar tree and parse text, and VexTab for the final sheet music output.",
          link: "https://github.com/hmc-cs111-spring2023/artifact-lillee205",
        }
      ],
    };
  },
  methods: {
    toLink(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
