<template>
  <v-switch
  class="text-white"
  
    style="margin-bottom: -10px; margin-top: -15px"
    v-model="onHobbies"
    :label="onHobbies ? 'Hobbies' : 'Organizations & Clubs'"
    hide-details
  >
  </v-switch>
  <v-slide-group ref="slideGroup" show-arrows center-active class="text-white" >
    <v-slide-group-item
      v-if="isMounted"
      v-for="(item, i) in items"
      :key="i"
      v-slot="{ toggle }"
    >
      <AboutMore 
        :elem="item.title" 
        :dialog="toggleDialog[item.title]"
        @update-modal="resetToggleDialog"
      ></AboutMore>
      <v-card
        class="ma-2 d-flex flex-column"
        style="max-height: 280px"
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
        <v-card-title>{{ item.title }}
        </v-card-title>
        <v-card-subtitle v-if="item.position" style="margin-top:-10px;">
          {{ item.position }}
        </v-card-subtitle>

        <v-card-text style="overflow-y: auto; padding-top:2px;min-height:0;flex: 1;" > {{ item.desc }} </v-card-text>
        <v-card-actions v-if="item.showMore" @click="toggleMore(item.title)">
          <v-btn>MORE</v-btn>
        </v-card-actions>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script>
import AboutMore from "@/components/AboutMore.vue";

export default {
  name: "AboutTab",
  components: { AboutMore },
  data() {
    return {
      onHobbies: false,
      isMounted: false,
      page: 1,
      orgs: [
        {
          title: "ashmc",
          position: "club director",
          desc: "As part of my college's executive board, I oversee all clubs and ensure that they're running smoothly, acting as a resource presidents can turn towards. I also arrange campus events such as the semesterly Club Fair which showcases the many clubs our college has to share, and communicate with deans to relay information back to the student body.",
          pic: "./../ashmc.jpg"
        },
        {
          title: "apispam",
          position: "mentor",
          desc: "I mentor underclassmen as a part of the Asian Pacific Islander Sponsor Program at Mudd (APISPAM), providing an environment where people can bond over their shared culture and also discuss prevalent issues within the community.",
          pic: "./../apispam.jpg"
        },
        {
          title: "epaic",
          position: "president",
          desc: "Exploring Pan-Asian Identity and Culture Club (EPAIC) hosts events and dinners for Asian holidays/festivals like Lunar New Year and the Mid-Autumn Festival to bring people together to celebrate their culture.", 
          pic: "./../epaic.jpg"

        },
        {
          title: "shogo taiko",
          position: "equipment manager",
          desc: "Taiko refers to a broad range of Japanese percussion instruments, but can also refer to the performance art of ensemble taiko drumming. This not only involves music, but also choreography and vocals.",
          pic: "./../taiko.JPG"
        },
        {
          title: "spectrum yearbook club",
          position: "president",
          desc: "I oversee and manage a team of ten talented designers and photographers to produce a ~150 page yearbook; so far, we've already produced three!",
          pic: "./../yearbook.jpg"
        },
      ],
      hobbies: [
        {
          title: "art",
          desc: "I've loved art since fourth grade because it lets me create literally whatever I want. Some of this passion carried over to designing UIs, but I still enjoy coming back to art. I began with traditional art through the Ryman Arts program, but nowadays turn to digital art.",
          pic: "./../drawings/glass.png",

        },
        {
          title: "ballroom",
          desc: "I started taking classes for ballroom dance in college. My favorite dances are the Latin dances like cha cha and jive.",
          pic: "./../ballroom.jpg"
        },
        {
          title: "photography",
          desc: "Finding good photography spots is always a fun adventure!",
          pic: "./../photography.png"
        },
      ],
    };
  },
  computed: {
    items() {
      return this.onHobbies ? this.hobbies : this.orgs;
    },
    toggleDialog() {
      var titles = this.hobbies.concat(this.orgs).map(item => item.title);
      var dict = {}
      titles.forEach(title => dict[title] = false) 
      console.log(dict)
      return dict 
    }
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    toggleMore(card) {
      if (card == "art") {
        this.toggleDialog[card] = true
      }
    }, 
    resetToggleDialog() {
      Object.keys(this.toggleDialog).forEach(e => this.toggleDialog[e] = false)
    }
  }
};
</script>
