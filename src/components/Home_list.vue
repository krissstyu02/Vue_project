<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <ul v-if="articles.length">
        <Names_articles
        v-for="article in articles" 
          :key="article.id"
          :id="article.id"
          :title="article.title"
        />
      </ul>
      <p v-else>
        No articles in the list.
      </p>
      
    </div>
  </template>
  
  <script>
// import ArticleBlock from './ArticleBlock.vue'
import Names_articles from './names_articles.vue';
export default{
    name: 'Home_list',
    props: {
        msg:String
    },
    components: {
        // ArticleBlock,
        Names_articles
    },

    // data() {
       
    // },
    // beforeMount: function(){
    //     fetch('/articles.json')
    //     .then(response => response.json())
    //     .then(articles => this.articles = articles);
    //     console.log('Fetch data');
    // }

};
</script>

<style scoped>
h3{
    margin:40px 0 0;
}
ul {
    list-style-type: none;
    padding:0;
}
li {
    display: inline-block;
    margin:0 10px;
}
a {
    color: #42b983;
}