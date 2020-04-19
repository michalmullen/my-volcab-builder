import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dicList: ['app', 'lorem ipsum asld as;dfj aasjf asdfj'],
  },
  mutations: {
    addWord(state, word, def) {
      state.dicList.add([word, def]);
    },
  },
  actions: {},
  modules: {},
});
