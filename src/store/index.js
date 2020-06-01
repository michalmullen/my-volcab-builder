import Vue from "vue";
import Vuex from "vuex";
import db from "../components/firebaseinit";

Vue.use(Vuex);

export default new Vuex.Store({
	strict: false,
	state: {
		words: [],
		firebaseInit: false,
		defSelector: false,
	},
	mutations: {
		addWord(state, word, definition) {
			state.words.push({
				word: word,
				definition: definition,
				show: false,
			});
			state.firebaseInit = true;
		},
		getWords(state) {
			db.collection("user_words")
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						const words = doc.data().words;
						console.log(words);
						for (var i = 0; i < words.length; i++) {
							state.words.push({
								word: doc.data().words[i].word,
								definition: doc.data().words[i].definition,
								show: false,
							});
						}
					});
				});
		},
		reverseShow(state, index) {
			console.log(state.words[index].show);
			state.words[index].show = !state.words[index].show;
		},
	},
	actions: {},
	modules: {},
});
