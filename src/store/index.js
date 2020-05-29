import Vue from "vue";
import Vuex from "vuex";
import wd from "word-definition";
import db from "../components/firebaseinit";

Vue.use(Vuex);
Vue.use(wd);

export default new Vuex.Store({
	state: {
		dicList: [
			[
				"definition",
				"a statement of the exact meaning of a word, especially in a dictionary.",
			],
			["app", "asdflorem ipsum asld as;dfj aasjf asdfj"],
		],
	},
	mutations: {
		addWord(state, word) {
			let definition = wd.getDef(word, "en", null, function(definition) {
				return definition;
			});
			state.dicList.push([word, definition]);
		},
		getWords(state) {
			db.collection("user_words")
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						console.log(doc.data());
						const wordDef = [
							doc.data().words[0].word,
							doc.data().words[0].definition,
						];
						console.log(wordDef);
						state.dicList.push(wordDef);
					});
				});
		},
	},
	actions: {},
	modules: {},
});
