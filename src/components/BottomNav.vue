<template>
  <v-bottom-navigation
    mandatory="true"
    app="true"
    fixed="true"
    :value="activeBtn"
    grow
    color="teal"
  >
    <v-btn>
      <span>Favorites</span>
      <v-icon>mdi-playlist-plus</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>
      <v-icon>mdi-playlist-check</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1
    };
  }
};
</script>
