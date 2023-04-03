import Vue from 'vue'
// import store from 'vue'
import VueRouter from 'vue-router'
import ArticleList from '../components/ArticleList.vue'

import ArticleBlock from "../components/ArticleBlock.vue"
import NewArticle from '../components/NewArticle.vue'
import about_1 from '../components/about_1.vue'

Vue.use(VueRouter)
const routes =[
    {
        path: '/',
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
        component: NewArticle
    }, 
    {
        path: '/articles/:id',
        component: ArticleBlock,
        props:(route) => ({ id: Number(route.params.id) })
        
    } 
    
]

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes
})

export default router