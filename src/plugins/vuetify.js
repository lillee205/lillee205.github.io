/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { VBottomSheet } from "vuetify/labs/VBottomSheet";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          accent: "#4DD6BD",
          primary: "#15131F",
          secondary: "#191A27",
          tertiary: "#1C222C",
          darkest: "#0c0c12",
        },
      },
    },
  },
  components: {
    VBottomSheet,
  },
});
