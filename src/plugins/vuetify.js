import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import '@mdi/font/css/materialdesignicons.css';
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#3f51b5',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c',
          background: '#d9dbe6',
          text: '#246464',
        },
      },
    },
  });
  
  export default vuetify;



