<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ArticleForm title="New title" body="" author="" publish=""
      v-on:add-article="addArticle" />
  </div>
</template>

<script>
import ArticleForm from './ArticleForm.vue'
import store from '../store'
import axios from 'axios'


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    ArticleForm,
  },
  

  methods:{
    addArticle: function(article){
      let newArticle={
        id:store.state.articles.length+1,
        ...article
      }
      // store.commit('addArticle',newArticle);
      // console.log(article.title);
      // this.$router.push('/articles')
      let data = {
      title: newArticle.title,
      author: newArticle.author,
      body: newArticle.body,
      published: newArticle.publish
};

      // Отправляем запрос POST на сервер с помощью Axios
      
      axios.post('http://localhost:10000/articles', data)
        .then(response => {
          console.log(response);
          store.commit('addArticle', newArticle);
          
        })
        .catch(error => {
          console.log(error);
        });
      this.$router.push('/articles');
          }

  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  margin:40px 0 0;
}
ul{
  list-style-type:none;
  padding:0;
}
li{
  display:inline-block;
  margin: 0 10px;
}
a{
  color:#42b983
}
</style>
    
