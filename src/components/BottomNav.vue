<template>
	<div>
		<v-bottom-navigation v-if="login" mandatory app grow color="secondary">
			<v-btn to="/">
				<span>New</span>
				<v-icon>mdi-playlist-plus</v-icon>
			</v-btn>

			<v-btn to="about">
				<span>Stored</span>
				<v-icon>mdi-playlist-check</v-icon>
			</v-btn>
		</v-bottom-navigation>
	</div>
</template>

<script>
export default {
	data: () => ({
		login: false,
	}),
};
</script>
