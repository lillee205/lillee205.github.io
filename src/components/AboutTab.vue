<template>
  <v-switch
    style="margin-bottom: -10px; margin-top: -15px"
    v-model="onHobbies"
    :label="onHobbies ? 'Hobbies' : 'Organizations & Clubs'"
    hide-details
  >
  </v-switch>
  <v-slide-group ref="slideGroup" show-arrows center-active>
    <v-slide-group-item
      v-if="isMounted"
      v-for="(item, i) in items"
      :key="i"
      v-slot="{ toggle }"
    >
      <v-card
        class="ma-2 d-flex flex-column"
        style="max-height: 280px"
        color="secondary"
        width="300"
        rounded
        @click="toggle"
      >
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          max-height="100"
          width="300"
          cover
        ></v-img>
        <v-card-title>{{ item.title }}
        </v-card-title>

        <v-card-text style="overflow-y: auto"> {{ item.desc }} </v-card-text>
        <v-card-actions v-if="item.showMore">
          <v-btn>MORE</v-btn>
        </v-card-actions>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script>
export default {
  name: "AboutTab",
  data() {
    return {
      onHobbies: true,
      isMounted: false,
      page: 1,
      orgs: [
        {
          title: "apispam",
          position: "mentor",
          desc: "I mentor underclassmen as a part of the Asian Pacific Islander Sponsor Program at Mudd (APISPAM).",
        },
        {
          title: "shogo taiko",
          position: "equipment manager",
          desc: "Taiko refers to a broad range of Japanese percussion instruments, but can also refer to the performance art of ensemble taiko drumming. This not only involves music, but also choreography and vocals.",
          showMore: true,
        },
        {
          title: "spectrum yearbook club",
          position: "president",
          desc: "I oversee and manage a team of ten talented designers and photographers to produce a ~150 page yearbook; so far, we've already produced three!"
        },
        {
          title: "ice cream club", 
          position: "president",
          desc: "Only one thing can be said: ice cream >>> boba."
        }
      ],
      hobbies: [
        {
          title: "art",
          desc: "I've loved art since fourth grade because it lets me create literally whatever I want. Some of this passion carried over to designing UIs, but I still enjoy coming back to art. I began with traditional art through the Ryman Arts program, but nowadays turn to digital art.",
          showMore: true,
        },
        {
          title: "ballroom",
          desc: "I started taking classes for ballroom dance in college; turns out, there's a lot more to ballroom than just waltzes! My favorite dances are the Latin dances like cha cha and jive.",
        },
        {
          title: "music",
          desc: "In my downtime, I like to create Spotify playlists for fun; feel free to check some out here!",
          showMore: true,
        },
      ],
    };
  },
  computed: {
    items() {
      return this.onHobbies ? this.hobbies : this.orgs;
    },
  },
  mounted() {
    this.isMounted = true;
  },
};
</script>
