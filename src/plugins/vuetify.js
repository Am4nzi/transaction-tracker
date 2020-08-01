import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

// export default new Vuetify({});

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#14233c',
                info: '#1D154A',
                background: '#CBD5E0',
            },
            dark: {
                primary: '#14233c',
            },
        },
    },
})