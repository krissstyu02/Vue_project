<template>
    <div >

        <router-link to="/article/:id">{{title}}</router-link> <br>
        <!-- <input type="checkbox" v-model="published"> -->
    </div>
</template>

<script>

export default {
    name: 'Names_articles',
    props: {
        title: String,
        id: Number
    },

    
};
</script>

<style scoped>

</style>

