<template>
    <div>
        <ArticleForm title="New title" body="" author="" published= "" v-on:addArticle="addArticle" />
    </div>
    
</template>

<script>

import ArticleForm from '@/components/ArticleForm.vue'
import store from '../store'
import axios from 'axios';

export default {
    components: {
        ArticleForm
    },
    methods: {
        addArticle: function(article){
            let newArticle = {
                id: store.state.articles.length+1,
                ...article
            }

            // if (newArticle.published===null)
            // newArticle.published = false;
            // else newArticle.published = true;
            let data = {
            title: newArticle.title,
            author: newArticle.author,
            body: newArticle.body,
            published: newArticle.published
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
        this.$router.push('/');
        }

    }
    
};
</script>


