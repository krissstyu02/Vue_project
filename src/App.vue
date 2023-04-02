<!-- <template>
  <v-app>
    <v-app-bar
      app
      color="#D1C4E9"
      dark
    >
      <div class="d-flex align-center">
        
        <v-img
          alt="Лучшие статьи"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script> -->

<!-- <template>
  <v-app>
    <v-navigation-drawer app>
      ваше содержимое меню
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-carousel>
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-card>
                  <v-img :src="item.src" height="300"></v-img>
                  <v-card-title>{{ item.title }}</v-card-title>
                  <v-card-text>{{ item.text }}</v-card-text>
                  <v-card-actions>
                    <v-btn color="primary">Подробнее</v-btn>
                  </v-card-actions>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-list>
              <v-list-item v-for="(item, i) in list" :key="i">
                <v-list-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-icon>
                <v-list-item-content>{{ item.text }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>Связаться с нами</v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field label="Имя"></v-text-field>
                  <v-text-field label="Email"></v-text-field>
                  <v-textarea label="Сообщение"></v-textarea>
                  <v-btn color="primary">Отправить</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer> -->
      <!-- ваше содержимое подвала
    </v-footer>
    <v-dialog v-model="dialog">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Название</th>
              <th>Количество</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in table" :key="i">
              <td>{{ item.name }}</td>
              <td>{{ item.count }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-dialog>
    <v-progress-circular v-if="loading" indeterminate></v-progress-circular>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://picsum.photos/id/1000/400/300",
          title: "Карточка 1",
          text: "Описание карточки 1",
        },
        {
          src: "https://picsum.photos/id/1001/400/300",
          title: "Карточка 2",
          text: "Описание карточки 2",
         } ]
        }
      }
    }
 </script> -->

<!-- <template>
  <v-app>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item>
          <v-list-item-title>Меню</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="(item, i) in menuItems" :key="i">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-carousel>
              <v-carousel-item
                v-for="(item, i) in carouselItems"
                :key="i"
              >
                <v-card>
                  <v-img :src="item.src" height="300"></v-img>
                  <v-card-title>{{ item.title }}</v-card-title>
                  <v-card-text>{{ item.text }}</v-card-text>
                  <v-card-actions>
                    <v-btn color="primary">Подробнее</v-btn>
                  </v-card-actions>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <v-row>
              <v-col v-for="(item, i) in articles" :key="i" cols="12">
                <v-card>
                  <v-img :src="item.img" height="200"></v-img>
                  <v-card-title>{{ item.title }}</v-card-title>
                  <v-card-subtitle>{{ item.date }}</v-card-subtitle>
                  <v-card-text>{{ item.text }}</v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-title>Добавить статью</v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field label="Заголовок"></v-text-field>
                  <v-text-field label="Дата"></v-text-field>
                  <v-textarea label="Текст"></v-textarea>
                  <v-btn color="primary">Добавить</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-list>
              <v-list-item>
                <v-list-item-title>О нас</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Наша компания</v-list-item-title>
                  <v-list-item-subtitle>г. Москва, ул. Примерная, д. 123</v-list-item-subtitle>
                  </v-list-item-content>
                  </v-list-item>
                  </v-list>
                  </v-col>
                  </v-row>
                  </v-container>
                  </v-footer>
                  </v-app> -->


                  <template>
                    <v-app>
                      <v-navigation-drawer app>
                        <v-list dense>
                          <v-list-item link to="/">
                            <v-list-icon><v-icon>mdi-file-document-box-multiple</v-icon></v-list-icon>
                            <v-list-item-content>Статьи</v-list-item-content>
                          </v-list-item>
                          <v-list-item link to="/about">
                            <v-list-icon><v-icon>mdi-information</v-icon></v-list-icon>
                            <v-list-item-content>О нас</v-list-item-content>
                          </v-list-item>
                          <v-list-item link to="/new">
                            <v-list-icon><v-icon>mdi-plus-circle</v-icon></v-list-icon>
                            <v-list-item-content>Добавить новую статью</v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-navigation-drawer>
                  
                      <v-app-bar app>
                        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                        <v-toolbar-title>Название приложения</v-toolbar-title>
                      </v-app-bar>
                  
                      <v-main>
                        <v-container>
                          <v-row>
                            <v-col cols="12">
                              <router-view></router-view>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-main>
                  
                      <v-footer app>
                        <span>&copy; 2023</span>
                      </v-footer>
                    </v-app>
                  </template>
                  
                  <script>
                  export default {
                    // data() {
                    //   return {
                    //     drawer: false,
                    //     list: []
                    //   };
                    // }
                    data: () => ({}),
                  };
                  </script>
                 