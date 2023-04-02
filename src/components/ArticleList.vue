<!-- <template>
    <div class="hello">
        <div v-if="loading" class="loader"></div>
        <ul v-if="!loading">
            <div v-if="articles.length">
                <ArticleBlock
                    v-for="article in articles" 
                    :key="article.id"
                    :title="article.title"
                    :body="article.body"
                    :published="article.published"
                    :author="article.author"
                    v-on:state="article.published=!article.published"
                />
            </div>
            <p v-else>
                No articles in the list.
            </p>
        </ul>
    <button v-if="loading" @click="cancelRequest">Cancel</button>
    <div v-if="errorMessage">{{ errorMessage }}</div>

      
    </div>
  </template>
  
  <script>
import ArticleBlock from './ArticleBlock.vue'
import axios from 'axios';
import {loadArticles} from '@/services/articlesService'
// import store from '../store'

export default{
    name: 'ArticleList',
    props: {
        msg:String
    },
    components: {
        ArticleBlock
    },

    computed: 
    {
        // getArticles(){
        //     return store.state.articles
        // },
        // countArticles(){
        //     return store.state.articles.length
        // }

    },
    
    data() {
        
        return {
            // articles: store.state.articles
            // count: countArticles()   
            articles: [],
            loading: false,
            cancelTokenSource: null,
            errorMessage: ''        
        }
        
    },

    methods:
    {
         loadArticles: async function(){

            this.loading=true;
            this.articles=[];
            this.cancelTokenSource = axios.CancelToken.source();

            loadArticles(this.cancelTokenSource)
            .then(data => {
                this.articles = data;
            })
            .catch(error => {
                console.error(error);
                this.errorMessage = error.message;
            })
            .finally(() => {
                this.loading = false;
            });
            // this.cancelTokenSource=axios.cancelToken.source();
            // try{
            //     // console.log("get it");
            //     const response = await axios.get('http://localhost:10000/articles')                
            //     this.articles = response.data;
                
            // }
            // catch(error){
            //     console.error(error);
            // }

            // this.loading = false;         
            
        },
        cancelRequest() {
            if (this.loading && this.cancelTokenSource) {
            this.cancelTokenSource.cancel('Request cancelled');
            }
        }
        // addArticle: function (article) {
        //     let newArticle = {
        //         id: this.articles.length+1,
        //         ...article
        //     }
        //     this.articles.push(newArticle);
        //     console.log(article.title);
        // }
    },
    
    beforeMount()  {
        this.loadArticles();
    }
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

.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin-left: auto;
  margin-right: auto;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> -->





<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <div v-if="loading" class="loader"></div>
            <ul v-if="!loading">
              <div v-if="articles.length">
                <ArticleBlock
                  v-for="article in articles"
                  :key="article.id"
                  :title="article.title"
                  :body="article.body"
                  :published="article.published"
                  :author="article.author"
                  v-on:state="article.published=!article.published"
                />
              </div>
              <p v-else>
                No articles in the list.
              </p>
            </ul>
            <v-card-text>
              <button v-if="loading" @click="cancelRequest">Cancel</button>
              <div v-if="errorMessage">{{ errorMessage }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  <script>
  import ArticleBlock from "./ArticleBlock.vue";
  import axios from "axios";
  import { loadArticles } from "@/services/articlesService";
  
  export default {
    name: "ArticleList",
    props: {
      msg: String,
    },
    components: {
      ArticleBlock,
    },
  
    computed: {},
  
    data() {
      return {
        articles: [],
        loading: false,
        cancelTokenSource: null,
        errorMessage: "",
      };
    },
  
    methods: {
      loadArticles: async function () {
        this.loading = true;
        this.articles = [];
        this.cancelTokenSource = axios.CancelToken.source();
  
        loadArticles(this.cancelTokenSource)
          .then((data) => {
            this.articles = data;
          })
          .catch((error) => {
            console.error(error);
            this.errorMessage = error.message;
          })
          .finally(() => {
            this.loading = false;
          });
      },
      cancelRequest() {
        if (this.loading && this.cancelTokenSource) {
          this.cancelTokenSource.cancel("Request cancelled");
        }
      },
    },
  
    beforeMount() {
      this.loadArticles();
    },
  };
  </script>
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  
  .loader {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    margin-left: auto;
    margin-right: auto;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>