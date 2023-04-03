<template>
    <v-row>
    <v-col md="7">
      
      <v-card class="h-100 nav justify-content-center">
         
          <h2 class="card-header">{{ article.title }}</h2>
          <div class="card-body">
            <h4 class="card-title">{{  article.author }}</h4>
            <p class="card-text">{{  article.body}}</p>
        </div>
        <!-- </v-img> -->
      </v-card>
      
    </v-col>
    </v-row>    

</template>

<script>

export default {
    name: 'ArticleBlock',
    props: {
        id: {
    type:Number,
      required: true
    }
        
    },
    
    computed: {
        upperAuthor(){
            return this.author.toUpperCase();
        },
        article() {
            console.log(`${this.$store.state.articles}`)
        return this.$store.state.articles.find(article => article.id === Number(this.id))
        }
        
    },

    watch: {
        published(newVal, oldVal)
        {
            console.log(`${newVal} ${oldVal}`);
        }
    },
    
    


};
</script>



