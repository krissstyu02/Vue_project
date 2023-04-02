import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: []
  },
  getters: {
  },
  mutations: {
    fetchArticles(state, articles){
        state.articles=articles;
    },
    addArticle(state,article){
        state.articles.push(article);
    }
  },
  actions: {
    fetchArticles(context){
        fetch('/articles.json')
        .then(response => response.json())
        .then(articles => context.commit('fetchArticles', articles));
        console.log('Fetch data');
    }
  },
  modules: {
  }
})
