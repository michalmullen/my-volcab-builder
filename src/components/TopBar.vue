<template>
	<div>
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
						<v-radio-group
							column
							v-for="(item, index) in this.definitions"
							:key="index"
						>
							<v-radio label="Bahamas, The" value="bahamas"></v-radio>
							<v-radio label="Bahrain" value="bahrain"></v-radio>
							<v-radio label="Bangladesh" value="bangladesh"></v-radio>
							<v-radio label="Barbados" value="barbados"></v-radio>
							<v-radio label="Belarus" value="belarus"></v-radio>
							<v-radio label="Belgium" value="belgium"></v-radio>
							<v-radio label="Belize" value="belize"></v-radio>
							<v-radio label="Benin" value="benin"></v-radio>
							<v-radio label="Bhutan" value="bhutan"></v-radio>
							<v-radio label="Bolivia" value="bolivia"></v-radio>
							<v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
							<v-radio label="Botswana" value="botswana"></v-radio>
							<v-radio label="Brazil" value="brazil"></v-radio>
							<v-radio label="Brunei" value="brunei"></v-radio>
							<v-radio label="Bulgaria" value="bulgaria"></v-radio>
							<v-radio label="Burkina Faso" value="burkina"></v-radio>
							<v-radio label="Burma" value="burma"></v-radio>
							<v-radio label="Burundi" value="burundi"></v-radio>
						</v-radio-group>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions>
						<v-btn color="secondary" text @click="show = false">Close</v-btn>
						<v-btn color="secondary" text @click="show = false">Save</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</v-row>
	</div>
</template>

<script>
var unirest = require("unirest");

var req = unirest(
	"GET",
	"https://twinword-word-graph-dictionary.p.rapidapi.com/definition/"
);

req.headers({
	"x-rapidapi-host": "twinword-word-graph-dictionary.p.rapidapi.com",
	"x-rapidapi-key": "250ec18612msh7dee980b0152fb5p11e163jsncb8370237c38",
	useQueryString: true,
});

export default {
	methods: {
		addWord() {
			this.$store.commit("addWord", this.word, this.definition);
			this.word = "";
		},
		async getDefinition() {
			req.query({
				entry: this.word,
			});

			await req.end(function(res) {
				if (res.error) throw new Error(res.error);

				let body = res.body;
				const def = body.meaning;

				console.log(body.meaning);
				this.definitions = [];
				if (def.adjective != "") {
					let adj = def.adjective.split("(adj) ").filter(function(el) {
						return el.length != 0;
					});
					this.definitions = this.definitions.concat(adj);
				}
				if (def.adverb != "") {
					let adv = def.adverb.split("(adv) ").filter(function(el) {
						return el.length != 0;
					});
					this.definitions = this.definitions.concat(adv);
				}
				if (def.noun) {
					let noun = def.noun.split("(nou) ").filter(function(el) {
						return el.length != 0;
					});
					console.log(noun);
					this.definitions = this.definitions.concat(noun);
				}
				if (def.verb != "") {
					let verb = def.verb.split("(vrb) ").filter(function(el) {
						return el.length != 0;
					});
					this.definitions = this.definitions.concat(verb);
				}
			});
			console.log(this.definitions);
			this.show = true;
			this.word = "";
		},
	},

	data: () => ({
		word: "",
		show: false,
		definitions: [],
	}),
};
</script>
