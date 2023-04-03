<template>
    <div class="hello">
        <div v-if="loading" >
            <v-progress-circular 
            color="gray"
            model-value="20"
            :size="79"
            :width="7"
            indeterminate
            ></v-progress-circular>
        </div>

        <ul v-if="!loading">
            <div v-if="articles.length">
                <v-container>
                    <v-row class="list__cafes-title"> <!-- В это row выводим заголовок компонента -->
                    <v-col>
                        <h2 class="text-center text-h3 py-3">Лучшие статьи 2023 года</h2>
                    </v-col>
                    </v-row>
                    <v-row>
                    <v-col md="4"
                        v-for="article in articles"
                        :key="article.id"
                        
                    >
                        <v-card height="400" width = 800 
                        
                        >
                            <v-btn  :to="'/articles/' + article.id " 
                            >{{ article.title }}</v-btn>
                            <v-card-subtitle >{{article.author}}</v-card-subtitle>
                            <v-img
                            height="300"
                            src="https://img.freepik.com/premium-vector/news-symbol-logo-design-illustration_337180-790.jpg?w=1380"
                            ></v-img> 
                            <v-btn @click="togglePublish(article)" :color="cardColor(article)">
                                {{ article.published ? 'Опубликовано' : 'Не опубликовано' }}
                            </v-btn>
                            
                        </v-card>
                        
                    </v-col>
                    </v-row>
                </v-container>
               
            </div>
            <p v-else>
                No articles in the list.
            </p>
        </ul>
        <button v-if="loading" @click="cancelRequest">Cancel</button>
        <div v-if="errorMessage">{{ errorMessage }}</div>
    </div>
  </template>

   
                <!-- v-on:state="article.published=!article.published" -->
  
  <script>

import axios from 'axios';
import {loadArticles} from '@/services/articlesService'

export default{
    name: 'ArticleList',
    props: {
        msg:String
    },
    components: {
    },
   
    data() {
        
        return { 
            articles: [],
            loading: false,
            cancelTokenSource: null,
            errorMessage: '',
            published: false        
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
                this.$store.state.articles = data;
            })
            .catch(error => {
                console.error(error);
                this.errorMessage = error.message;
            })
            .finally(() => {
                this.loading = false;
            });   
            
        },
        cancelRequest() {
            if (this.loading && this.cancelTokenSource) {
            this.cancelTokenSource.cancel('Request cancelled');
            }
        },
        cardColor(article) {
        if (article.published) {
            return "green"; 
        } else {
            return "red"; 
        }
        },


        async togglePublish(article) {
      try {
        // обновляем значение publish в локальном хранилище
        article.published = !article.published;
        
        await axios.put(`http://localhost:10000/articles/${article.id}`, article);
    
    // обновляем данные в хранилище
            this.$store.commit('updateArticle', article);
        } catch (error) {
            console.error(error);
        }

        
    }
         
        
    },

    
    beforeMount()  {
        this.loadArticles();
    }
    };
</script>

