import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const vuetify = new Vuetify({
	theme: {
		dark: true,
		themes: {
			dark: {
				primary: "#3FEE9E",
				navColor: "#060039",
				primaryAccent: "#553DD5",
				secondary: "#3FEE9E",
				accent: "#FF446F",
				card: "5539ff",
			},
		},
	},
});

export default vuetify;
