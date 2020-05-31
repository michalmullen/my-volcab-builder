import Vue from "vue";
import Vuex from "vuex";
import db from "../components/firebaseinit";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		wordList: [],
	},
	mutations: {
		addWord(state, word) {
			state.wordList.push({
				word: word,
				definition: "bla bla bla",
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
							state.wordList.push({
								word: doc.data().words[i].word,
								definition: doc.data().words[i].definition,
								show: true,
							});
						}
					});
				});
		},
		changeShow(state, index) {
			state.wordList[index].show = !state.wordList[index].show;
		},
	},
	actions: {},
	modules: {},
});
