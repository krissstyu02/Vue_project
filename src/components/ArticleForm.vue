<!-- <template>
    <div>
        <h2 style="font-size: 30px;margin-top: 60px;">Добавить новую статью</h2>
    <form onsubmit="alert('submit!');return false">
      <div><input type="text" v-model="article.title" placeholder="Title"></div>
      <div><input type="text" v-model="article.author" placeholder="Author"></div>
      <div><textarea v-model="article.body" placeholder="Body"></textarea></div>
      <div><label><input type="checkbox" v-model="article.publish">Опубликована</label></div>
      <div ><input type="submit" value="Добавить" 
        v-on:click.prevent="$emit('addArticle',article)">
      </div>
    </form>
    </div>
</template>

<script>
export default {
    name: "ArticleForm",
    props: {
        title: String,
        body: String,
        author: String,
        published: Boolean,
    },
    data(){
        return{
            article:{
                title: this.title,
                body: this.body,
                author: this.author,
                published: this.published
            }
        }
    }
};
</script> -->


<template>
    <div>
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 class="headline mb-5">Добавить новую статью</h2>
          </v-col>
        </v-row>
  
        <v-form>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="article.title"
                label="Заголовок"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
  
            <v-col cols="12" md="6">
              <v-text-field
                v-model="article.author"
                label="Автор"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
  
            <v-col cols="12">
              <v-textarea
                v-model="article.body"
                label="Текст статьи"
                outlined
                dense
                required
              ></v-textarea>
            </v-col>
  
            <v-col cols="12">
              <v-checkbox
                v-model="article.publish"
                label="Опубликована"
                dense
              ></v-checkbox>
            </v-col>
  
            <v-col cols="12">
              <v-btn
                color="primary"
                class="mr-4"
                @click.prevent="$emit('addArticle', article)"
              >
                Добавить
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    name: "ArticleForm",
    props: {
      title: String,
      body: String,
      author: String,
      published: Boolean,
    },
    data() {
      return {
        article: {
          title: this.title,
          body: this.body,
          author: this.author,
          publish: this.published,
        },
      };
    },
  };
  </script>
  