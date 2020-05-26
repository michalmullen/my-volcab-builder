import Vue from 'vue';
import Vuex from 'vuex';
import wd from 'word-definition';

Vue.use(Vuex);
Vue.use(wd);

export default new Vuex.Store({
  state: {
    dicList: [
      ['definition', 'a statement of the exact meaning of a word, especially in a dictionary.'],
      ['app', 'asdflorem ipsum asld as;dfj aasjf asdfj']
    ],
  },
  mutations: {
    addWord(state, word) {
      let definition = wd.getDef(word, 'en', null, function(definition) {
        return definition;
      });
      state.dicList.push([word, definition]);
    },
  },
  actions: {},
  modules: {},
});
