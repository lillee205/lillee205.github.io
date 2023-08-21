<template>
  <v-dialog
    :modelValue="dialog"
    @update:modelValue="dialog = $event"
  >
    <ArtMore v-if="elem == 'art'"></ArtMore>
  </v-dialog>
</template>

<script>
import ArtMore from "@/components/hobbies/ArtMore.vue"
export default {
  name: "AboutMore",
  props: ['elem', 'dialog'],
  components: { ArtMore }, 
  watch: {
    dialog() {
      if (!this.dialog) {
      this.$emit("update-modal")

      }
    }
  }
};
</script>
<style scoped>
::v-deep .v-overlay__scrim {
  opacity: 0.7  ;
}
</style>