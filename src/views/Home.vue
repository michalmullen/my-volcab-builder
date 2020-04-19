<template>
  <v-container grid-list-xs>
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="(item,i) in 50" :key="i">
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>{{ words[0]}}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  computed: {
    words() {
      return this.$store.state.dicList;
    }
  },

  data: () => ({
    //
  })
};
</script>
