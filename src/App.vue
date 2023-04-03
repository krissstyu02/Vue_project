<template>
  <v-app id="inspire">
    
    <v-app-bar
      app

    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="text-h4 black--text">HOTNEWS</v-toolbar-title>

      <v-spacer></v-spacer>

       <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>  -->
    </v-app-bar>
    
    <v-main app>
      <v-layout>
        <v-navigation-drawer
          expand-on-hover
          rail
        >
          <v-list>
            <v-list-item color="primary" :to="'/'">
              <v-icon>mdi-text-long</v-icon>
              <v-list-item-content>
                <v-list-item-title>Articles</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item color="primary" :to="'/about'">
              <v-icon>mdi-information-outline</v-icon>
              <v-list-item-content>
                <v-list-item-title>О нас</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item color="primary" :to="'/new'">
              <v-icon>mdi-plus-box-outline</v-icon>
              <v-list-item-content>
                <v-list-item-title>Добавить статью</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        
        <router-view/>
      </v-layout>
      
    </v-main>
  </v-app>
</template>


<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      

    }
  },
};
</script>
