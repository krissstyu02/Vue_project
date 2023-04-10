<template>
  <v-app id="inspire" style="background-color: #d9dbe6;color: #246464">
    
    <v-app-bar style="background-color: #246464;color: #d9dbe6"
      app

    > 

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="text-h4 black--text">HOTNEWS</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
    
    <v-main app >
      
      <v-layout >
        <v-navigation-drawer
          expand-on-hover
          rail
          height="100%"
          overflow-y="auto"
          style="background-color: #246464;color: #d9dbe6"
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

    <!-- <v-footer color=#546E7A style="height: 70px;">
      <span class="white--text">&copy; 2023 HotNews</span>
    </v-footer> -->

    <v-footer color="#246464">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.name"
        :to="link.link"
        color="white"
        variant="text"
        class="mx-2"
      >
        {{ link.name }}
      </v-btn>
      <v-col class=" white--text mt-4" cols="12" >
        &copy;{{ new Date().getFullYear() }} <strong>HotNews</strong>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>


<script>

export default {
  name: 'App',
  components: {
  },


  data() {
    return {

      links: [
        {
          name: 'Статьи',
          link: '/'
        },
        {
          name: 'О нас',
          link: '/about'
        },
        {
          name: 'Добавить новую статью',
          link: '/new'
        }
      ]
      

    }
  },
};
</script>

<style>
body {
  background-color: #d9dbe6 !important; /* устанавливаем цвет фона */
  color: #246464 !important; /* устанавливаем цвет текста */
}
.v-footer{
  background-color:#246464;
  color:#d9dbe6;
}
</style>