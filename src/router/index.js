import Vue from 'vue'
// import store from 'vue'
import VueRouter from 'vue-router'
import ArticleList from '../components/ArticleList.vue'
import about_1 from '@/components/about_1'
// import ArticleForm from '../components/ArticleForm.vue'
// import Names_articles from '../components/names_articles.vue'
// import Home_list from '../components/Home_list.vue'
import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)
const routes =[
    {
        path: '/',
        // name: 'Home',
        component: ArticleList
    },
    {
        path: '/about',
        // name: 'About',
        component: about_1
    },
    {
        path: '/new',
        name: 'Add new article',
        component: HelloWorld
    },
    
    
    // {
    //     path: '/articles/:id',
    //     component: Names_articles,
    //     props: (route) => store.state.articles.find((x) => x.id == route.params.id)
    // }
]

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes
})

export default router