<template>
    <div class="blog-post">
        <p>
            {{ message }}
        </p>

        <h2>{{ id }} - {{ blogPostTitle }}</h2>
        <h4>{{ blogPostContent }}</h4>
        <button @click="changeBlogPostTitle">
            Change blog post title
        </button>
    </div>
</template>

<script setup>
import {ref} from 'vue'

let message = ref('This is is the BlogPost component.')

let props = defineProps(['id','blogPostTitle','blogPostContent'])

function changeBlogPostTitle() {
    blogPostTitle = 'a different title'
}

console.log(props.blogPostTitles)

// defineProps({
//     id: Number,
//     blogPostTitle: String,
//     blogPostContent: String
// })

</script>

<style scoped>

.blog-post{
    background-color: aqua;
    padding: 10px;
    margin-bottom: 10px;
}

</style>