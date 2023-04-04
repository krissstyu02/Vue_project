

 <template>
    <v-row>
      <v-col md="7">
        <v-card class="h-100 nav justify-content-center">
          <div class="card-body">
            <v-simple-table>
              <template v-slot:default>
                <tbody>
                  <tr>
                    <td><b>Заголовок:</b></td>
                    <td>{{ article.title }}</td>
                  </tr>
                  <tr>
                    <td><b>Автор:</b></td>
                    <td>{{ article.author }}</td>
                  </tr>
                  <tr>
                    <td><b>Текст статьи:</b></td>
                    <td>{{ article.body }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
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
    },
    watch: {
      published(newVal, oldVal) {
        console.log(`${newVal} ${oldVal}`)
      }
    }
  }
  </script>
  
  <style scoped>
  .card-header {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  .card-title {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .card-text {
    font-size: 1.1rem;
    line-height: 1.5;
  }
  </style>
  
