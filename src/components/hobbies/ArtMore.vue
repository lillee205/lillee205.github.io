<template>
  <v-container fluid style="overflow:scroll; height:90vh;width:90vw;">
    <ul>
      <li v-for="(pic, i) in imgUrls" :key="i">
        <v-img
          :src="pic"
        cover
          style="vertical-align: bottom;object-fit:cover;min-width:100%;max-height:100%;"
        ></v-img>
      </li>
    </ul>
    
  </v-container>
</template>

<script>
export default {
  name: "ArtMore",
  data() {
    return {
      imgUrls: [
        "./../drawings/glass.png",
        "./../drawings/bunnies.jpg",
        "./../drawings/drawing.jpg",
        "./../drawings/pete.png",
        "./../drawings/logo.png",

      ],
    };
  },
};
</script>

<style scoped>

ul {
  display: flex;
  flex-wrap: wrap;
  height:100%;
  width:100%;
}

li {
  flex-grow: 1;
  list-style-type: none;
  margin: 5px;
}


</style>