<template>
	<v-container grid-list-xs>
		<v-row dense>
			<v-col cols="12">
				<v-card
					class="mx-auto mb-3"
					v-for="(item, index) in words"
					:key="index"
				>
					<v-card-actions @click="item.show = !item.show">
						<v-card-title>
							{{ item.word }}
						</v-card-title>

						<v-spacer></v-spacer>

						<v-btn icon>
							<v-icon>{{
								item.show ? "mdi-chevron-up" : "mdi-chevron-down"
							}}</v-icon>
						</v-btn>
					</v-card-actions>

					<v-expand-transition>
						<div v-show="item.show">
							<v-divider></v-divider>

							<v-card-actions>
								<v-card-text>
									{{ item.definition }}
								</v-card-text>

								<v-spacer></v-spacer>

								<v-btn icon>
									<v-icon>mdi-pencil</v-icon>
								</v-btn>
							</v-card-actions>
						</div>
					</v-expand-transition>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	computed: {
		words() {
			return this.$store.state.words;
		},
		alreadyCreated() {
			return this.$store.state.firebaseInit;
		},
		defSelector() {
			return this.$store.state.firebaseInit;
		},
	},

	created() {
		if (!this.alreadyCreated) {
			this.$store.commit("getWords");
		}
	},

	methods: {
		show(index) {
			this.store.commit("reversShow", index);
		},
		showDefs(bool) {
			this.$store.commit("defSelector", bool);
		},
	},
};
</script>
