<template>
  <v-slide-group class="text-white h-100" ref="slideGroup" show-arrows center-active>
    <v-slide-group-item  v-for="(item, i) in items" :key="i" v-slot="{ toggle }">
      <v-card
        class="ma-2 d-flex flex-column"
        color="secondary"
        width="300"
        style="max-height:300px;"
        rounded
        @click="toggle"
      >
        <v-img
          :src="item.pic ? item.pic : 'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
          max-height="100"
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
        <v-card-text style="overflow-y:scroll;min-height:0;flex: 1"> {{ item.desc }} </v-card-text>
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
          desc: "Code for the site you're looking at right now! Built using the Vuetify UI library which relies on Vue to create a clean and responsive design.",
          skills: ["Vue", "Vuetify", "JS"],
          link: "https://github.com/lillee205/lillee205.github.io",
        },
        {
          title: "coding with wally",
          desc: "A coding site akin to CodingBat specifically for Harvey Mudd's introductory CS class. This is a webapp that uses a Python backend with Flask, and relies on the SQLAlchemy database to retrieve problem sets.",
          skills: ["HTML", "CSS", "JS", "Python", "Flask", "SQLAlchemy"],
          link: "https://github.com/lillee205/codingwithwally",
          pic:"./../projects/codingWithWally.png"
        },
        {
          title: "weSearch",
          desc: "A web-app for efficient organization and communication when forming search parties for missing people. It uses Firebase to manage messaging between users, account authentication, and more. Won 1st place in the 2019 Congressional App Challenge.A web-app for efficient organization and communication when forming search parties for missing people. It uses Firebase to manage messaging between users, account authentication, and more. Won 1st place in the 2019 Congressional App Challenge.A web-app for efficient organization and communication when forming search parties for missing people. It uses Firebase to manage messaging between users, account authentication, and more. Won 1st place in the 2019 Congressional App Challenge.",
          skills: ["HTML", "CSS", "JS", "Node", "Firebase"], 
          link: "https://www.youtube.com/watch?v=RXJaR72ju3g",
          pic: "./../projects/weSearch.png"
        }, {
          title: "coloringBook",
          desc: "Uses Pillow to detect outlines of the line art on a coloring page, and fills space in with specified color. Explored dynamic programming algorithms to fill in space efficiently.",
          skills: ["Flask", "Pillow", "HTML canvas"],
          link: "https://github.com/lillee205/coloringBook",
          pic: "./../projects/coloringBook.png"
        }, {
          title: "DonKaScript",
          desc: "Simple website that parses plain text taiko (Japanese percussion) language to sheet music. Uses Quill to allow for rich text formatting, Peggy to create the grammar tree and parse text, and VexTab for the final sheet music output.",
          link: "https://github.com/hmc-cs111-spring2023/artifact-lillee205",
          skills: ["Peggy.js, VexTab, Quill.js"],
          pic: "./../projects/donKa.png"
        }, {
          title: "puffle roundup",
          desc: "A VPython rendition of Club Penguin's Puffle Roundup game hosted on GlowScript (Chrome recommended to play). You control a penguin to herd little puffballs into an enclosure; the winning condition is simply to get all of them corralled.",
          skills: ["Python", "VPython"],
          pic: "./../projects/puffleRoundup.png"
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
