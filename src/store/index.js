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
		addWord(state, newWord) {
			console.log("vuex", newWord);
			state.words.push({
				word: newWord[0],
				definition: newWord[1],
				show: false,
			});
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
			state.firebaseInit = true;
		},
		reverseShow(state, index) {
			console.log(state.words[index].show);
			state.words[index].show = !state.words[index].show;
		},
	},
	actions: {},
	modules: {},
});
