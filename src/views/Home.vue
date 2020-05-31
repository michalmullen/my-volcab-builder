<template>
	<v-container grid-list-xs>
		<!-- <v-expansion-panels focusable>
			<v-expansion-panel v-for="i in words.length" :key="i">
				<v-expansion-panel-header
					>{{ words[i - 1][0] }}
				</v-expansion-panel-header>
				<v-expansion-panel-content class="ma-0 pa-0">
					<v-row>
						<v-col class="flex-grow-4 flex-shrink-0">
							{{ words[i - 1][1] }}
						</v-col>
						<v-col class="flex-grow-0 flex-shrink-4">
							<v-btn icon color="secondary">
								<v-icon class="align-end">mdi-pencil</v-icon>
							</v-btn>
						</v-col>
					</v-row>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels> -->

		<v-row dense>
			<v-col cols="12">
				<v-card class="mx-auto mb-3" v-for="i in words.length" :key="i">
					<v-card-actions>
						<v-card-title>
							{{ words[i - 1][0] }}
						</v-card-title>

						<v-spacer></v-spacer>

						<v-btn icon @click="show = !show">
							<v-icon>{{
								show ? "mdi-chevron-up" : "mdi-chevron-down"
							}}</v-icon>
						</v-btn>
					</v-card-actions>

					<v-expand-transition>
						<div v-show="show">
							<v-divider></v-divider>

							<v-card-actions>
								<v-card-text>
									{{ words[i - 1][1] }}
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

		<v-row justify="center">
			<v-dialog v-model="dialog" scrollable max-width="300px">
				<v-card>
					<v-card-text style="height: 300px;">
						<v-radio-group v-model="dialogm1" column>
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
						<v-btn color="secondary" text @click="dialog = false">Close</v-btn>
						<v-btn color="secondary" text @click="dialog = false">Save</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</v-row>
	</v-container>
</template>

<script>
export default {
	computed: {
		words() {
			return this.$store.state.wordList;
		},
	},

	created() {
		this.$store.commit("getWords");
	},

	data: () => ({
		dialog: false,
		show: false,
	}),
};
</script>
