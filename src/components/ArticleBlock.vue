<template>
    <div v-bind:class="{div_form: !(published)}">
    <h3  > {{title}} </h3>
    <div>
        {{body}}
    </div>
    <br>
    <div> {{upperAuthor}}</div>
    <br>
    <div> {{published}}</div>
    <!-- <input type="checkbox" v-model="published"> -->
    <button v-on:click.prevent="$emit('state')"> Опубликовать </button>
    </div>
</template>

<script>

export default {
    name: 'ArticleBlock',
    props: {
        title: String,
        body: String,
        published: Boolean,
        author: String
    },

    computed: {
        upperAuthor(){
            return this.author.toUpperCase();
        }
    },

    watch: {
        published(newVal, oldVal)
        {
            console.log(`${newVal} ${oldVal}`);
        }
    }

};
</script>

<style scoped>
h3{
  color:grey;
  font-size: 25px;
  font-style: normal;
}
h5{
  color:black;
  font-size: 1em;
  font-style: normal;

}
h2{
  color:black;
  font-size: 1em;
  
}

</style>

