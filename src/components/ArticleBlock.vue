<template>
  <v-row class="justify-content-center align-items-center h-100">
    <v-col cols="12" md="8" lg="6">
      <v-card>
        <v-img height="500px" src="../assets/girl.jpg" :lazy-src="article.image" aspect-ratio="1"></v-img>
        <v-card-title class="headline">{{ article.title }}</v-card-title>
        <v-card-subtitle>{{ article.author }}</v-card-subtitle>
        <v-card-text>{{ article.body }}</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-card-title class="subtitle-1">Информация о статье:</v-card-title>
          <v-simple-table class="table--style" dense>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td class="table--header">Тема:</td>
                  <td>{{ article.title }}</td>
                </tr>
                <tr>
                  <td class="table--header">Автор:</td>
                  <td>{{ article.author }}</td>
                </tr>
                <tr>
                  <td class="table--header">Дата:</td>
                  <td>{{ new Date().getFullYear()}}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ArticleBlock',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    article() {
      return this.$store.state.articles.find(article => article.id === Number(this.id))
    }
  }
}
</script>

<style scoped>
.v-card {
  margin: auto;
  max-width: 100%;
  padding: 0;
}
.v-img {
  object-fit: cover;
}
.table--style {
  max-width: 500px;
  margin: 24px auto;
}
.table--header {
  font-weight: bold;
  width: 120px;
}
</style>
