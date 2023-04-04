
<template>
  <div class="article-form">
    <v-container>

      <v-carousel style="width: 1100px">
        <v-carousel-item v-for="(image, index) in images" :key="index">
          <v-img :src="image.src" :alt="image.alt"></v-img>
        </v-carousel-item>
      </v-carousel>

      <v-row>
        <v-col cols="12">
         <br> <h2 class="headline mb-5">Добавить новую статью</h2>
        </v-col>
      </v-row>

      
            <v-btn @click="dialog = true">Правила написания статьи </v-btn>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Как правильно оформить статью</span>
        </v-card-title>
        <v-card-text>Размер допустимого шрифта – не менее 12, но чаще всего используется 14.<br>
ГОСТ на тип шрифта нет, но большинство журналов и авторитетных изданий принимают только работы со шрифтом TIMES NEW ROMAN.<br>
Поля. Правое – от 10 мм, Верхнее и нижнее – от 20 мм, левое – от 30 мм и больше. Часто, везде ставят 20 мм. ГОСТ предусматривает поля до 25 мм. по всем краям<br>
Отступ абзаца от 12 до 15 мм.<br>
Нумерация ТОЛЬКО арабскими цифрами посередине листа без точки. Использование римских цифр или иное расположение нумерации на листе НЕ ДОПУСКАЕТСЯ!<br>
Междустрочный интервал – полуторный. Не пытайтесь увеличить/уменьшить размер работы с помощью расстановки двойных пробелов или манипуляций с интервалами. Обычно это заканчивается отклонением статьи.<br>
</v-card-text>
        <v-card-actions>
          <v-btn text @click="dialog = false">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <br>
         <br>

      <v-form>
        <v-row>
          <v-col cols="10" md="6">
            <v-text-field
              v-model="article.title"
              label="Заголовок"
              outlined
              dense
              required
              clearable
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="article.author"
              label="Автор"
              outlined
              dense
              required
              clearable
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea
              v-model="article.body"
              label="Текст статьи"
              outlined
              dense
              required
              clearable
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
              class="mr-4"
              variant="plain"
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
        published: this.published
        
      },
      images: [
      { src:"image1.jpeg", alt: "Image 1" },
      { src: "image2.jpg", alt: "Image 2" },
      { src: "image3.jpg", alt: "Image 3" },
    ],
    dialog: false,
    };
  },
};
</script>

<style scoped>

.article-form {
  width: 100%;
}

.headline {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.v-btn {
  text-transform: none;
}
</style>


