<template>
  <v-slide-group 
    ref="slideGroup"
    show-arrows
    >
    <v-slide-group-item v-for="(item, i) in items" :key="i">
      <v-card class="ma-2" height="220" :width="cardWidth" rounded>
        {{ item.title }}
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script>
import { useElementSize } from '@vueuse/core'

export default {
  name: "ContentBar",
  data() {
    return {
      page: 1,
      items: Array.from({ length: 10 }, (k, v) => ({
        title: "Item " + v + 1,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
      })),
    };
  },
  computed: {
    slideGroupWidth() {
      const { width, _ } = useElementSize(this.$refs.slideGroup)
      console.log(width)
      return width;
    },
    slideGroupHeight() {
      const { _, height } = useElementSize(this.$refs.slideGroup)
      return height;
    },
    cardWidth() {
      console.log(this.slideGroupWidth/4)
      return this.slideGroupWidth / 4
    }
  },
};
</script>
