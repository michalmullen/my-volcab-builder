<template>
	<div v-if="login">
		<v-app-bar app>
			<v-text-field
				flat
				@submit="addWord"
				hide-details
				prepend-inner-icon="mdi-plus"
				label="Add Word"
				clearable
				v-on:keyup.enter="getDefinition"
				v-model="word"
				color="secondary"
			/>
			<v-btn icon color="secondary">
				<v-icon pl-1>mdi-cog</v-icon>
			</v-btn>
		</v-app-bar>
		<v-row justify="center">
			<v-dialog v-model="show" scrollable max-width="300px">
				<v-card>
					<v-card-text style="height: 300px;">
						<v-radio-group column v-model="definition">
							<v-radio
								color="secondary"
								v-for="(item, index) in definitions"
								:key="index"
								:label="item"
								:value="item"
							></v-radio>
						</v-radio-group>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions>
						<v-btn color="secondary" text @click="show = false">Close</v-btn>
						<v-btn color="secondary" text @click="addWord">Save</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</v-row>
	</div>
</template>

<script>
const axios = require("axios");

export default {
	methods: {
		addWord() {
			let newWord = [this.word, this.definition];
			this.$store.commit("addWord", newWord);
			this.show = false;
			this.word = "";
		},
		getDefinition() {
			axios({
				method: "GET",
				url:
					"https://twinword-word-graph-dictionary.p.rapidapi.com/definition/",
				headers: {
					"content-type": "application/octet-stream",
					"x-rapidapi-host": "twinword-word-graph-dictionary.p.rapidapi.com",
					"x-rapidapi-key":
						"250ec18612msh7dee980b0152fb5p11e163jsncb8370237c38",
					useQueryString: true,
				},
				params: {
					entry: this.word,
				},
			})
				.then((response) => {
					if (response.result_code == 200) {
						let def = response.data.meaning;
						let defs = [];
						if (def.adjective != "") {
							let adj = def.adjective.split("(adj) ").filter(function(el) {
								return el.length != 0;
							});

							defs = defs.concat(adj);
						}
						if (def.adverb != "") {
							let adv = def.adverb.split("(adv) ").filter(function(el) {
								return el.length != 0;
							});

							defs = defs.concat(adv);
						}
						if (def.noun) {
							let noun = def.noun.split("(nou) ").filter(function(el) {
								return el.length != 0;
							});

							defs = defs.concat(noun);
						}
						if (def.verb != "") {
							let verb = def.verb.split("(vrb) ").filter(function(el) {
								return el.length != 0;
							});

							defs = defs.concat(verb);
						}

						this.definitions = defs;
						this.show = true;
					} else {
						this.definition = "";
						this.addWord();
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},

	data: () => ({
		word: "",
		show: false,
		definitions: null,
		definition: "",
		login: false,
	}),
};
</script>
