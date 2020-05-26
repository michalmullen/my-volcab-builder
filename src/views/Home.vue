<template>
  <v-container grid-list-xs>
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="i in words.length" :key="i">
        <v-expansion-panel-header>{{ words[i-1][0]}} </v-expansion-panel-header>
        <v-expansion-panel-content>{{ words[i-1][1] }}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  computed: {
    words() {
      return this.$store.state.dicList;
    },
  },

  data: () => ({
    //
  }),
};
</script>
