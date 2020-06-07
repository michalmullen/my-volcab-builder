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
		<v-bottom-navigation v-if="!login" mandatory app grow color="secondary">
			<v-btn to="/login">
				<span>Login</span>
				<v-icon>mdi-account</v-icon>
			</v-btn>

			<v-btn to="register">
				<span>Register</span>
				<v-icon>mdi-account-plus</v-icon>
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
