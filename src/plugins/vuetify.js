import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

// export default new Vuetify({});

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1D154A',
                secondary: '#15454A',
                info: '#1D154A',
                background: '#fff',
            },
            dark: {
                primary: '#14233c',
            },
        },
    },
})