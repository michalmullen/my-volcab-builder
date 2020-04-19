<template>
  <v-app>
    <TopBar />

    <v-content>
      <router-view />
    </v-content>
    <BottomNav />
  </v-app>
</template>

<script>
import TopBar from "./components/TopBar";
import BottomNav from "./components/BottomNav";

export default {
  name: "App",

  components: {
    TopBar,
    BottomNav
  },

  data: () => ({
    //
  })
};
</script>
