import Vue from "vue";
import Vuex from "vuex";
import wd from "word-definition";
import db from "../components/firebaseinit";

Vue.use(Vuex);
Vue.use(wd);

export default new Vuex.Store({
	state: {
		wordList: [],
	},
	mutations: {
		addWord(state, word) {
			let definition = wd.getDef(word, "en", null, function(definition) {
				return definition;
			});
			state.wordList.push([word, definition, false]);
		},
		getWords(state) {
			db.collection("user_words")
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						const words = doc.data().words;
						console.log(words);
						for (var i = 0; i < words.length; i++) {
							state.wordList.push([
								doc.data().words[i].word,
								doc.data().words[i].definition,
								false,
							]);
						}
					});
				});
		},
	},
	actions: {},
	modules: {},
});
