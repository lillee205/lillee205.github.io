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
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
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
        <v-card-text style="overflow-y:scroll;"> {{ item.desc }} </v-card-text>
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
      page: 1,
      items: [
        {
          title: "taiko",
          desc: "Taiko refers to a broad range of Japanese percussion instruments, but can also refer to the performance art of ensemble taiko drumming. This not only involves music, but also choreography and vocals.",
          showMore: true
        },
        {
          title: "art",
          desc: "I've loved art since fourth grade because it lets me create literally whatever I want. Some of this passion carried over to designing UIs, but I still enjoy coming back to art. I began with traditional art through the Ryman Arts program, but nowadays turn to digital art.",
          showMore: true
        },
        {
          title: "ballroom",
          desc: "I started taking classes for ballroom dance in college; turns out, there's a lot more to ballroom than just waltzes! My favorite dances are the Latin dances like cha cha and jive.",
        },
        {
          title: "music",
          desc: "In my downtime, I like to create Spotify playlists for fun; feel free to check some out here!",
          showMore: true
        }
      ],
    };
  },
}
</script>
