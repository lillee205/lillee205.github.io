<template>
  <v-slide-group ref="slideGroup" show-arrows center-active>
    <v-slide-group-item
      v-for="(item, i) in items"
      :key="i"
      v-slot="{ toggle }"
    >
      <v-card
        class="ma-2"
        height="220"
        :width="cardWidth"
        rounded
        @click="toggle"

      >
        {{ item.title }}
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script>
export default {
  name: "ContentBar",
  data() {
    return {
      page: 1,
      items: Array.from({ length: 10 }, (k, v) => ({
        title: "Item " + v + 1,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!",
      })),
      cardWidth: 300,
    };
  },
  mounted() {
    this.cardWidth = this.$refs.slideGroup.$el.clientWidth / 4;
  },
};
</script>
