<template>
	<v-app-bar app>
		<v-text-field
			flat
			@submit="addWord"
			hide-details
			prepend-inner-icon="mdi-plus"
			label="Add Word"
			clearable
			v-on:keyup.enter="addWord"
			v-model="word"
			color="secondary"
		/>
		<v-btn icon color="secondary">
			<v-icon pl-1>mdi-cog</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script>
export default {
	methods: {
		addWord() {
			console.log("enter");
			this.$store.commit("addWord", this.word);
			this.word = "";
		},
	},

	data: () => ({
		word: "",
	}),
};
</script>
