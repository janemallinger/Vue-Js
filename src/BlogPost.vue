<template>
    <div class="blog-post">
        <p>
            {{ message }}
        </p>

        <h2>{{ id }} - {{ blogPostTitle }}</h2>
        <div>
            Modify the title: 
            <input type="text" v-model="blogPostTitle" />
        </div>
        <h4>{{ blogPostContent }}</h4>
        <div>
            modify the content: 
            <input type="text" v-model="blogPostContent"/>
        </div>
        <button @click="$emit('delete-blog-post', id)">Delete Post</button>
        <button @click="emitDeletePostEvent(id)">Delete Post</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'

let message = ref('This is is the BlogPost component.')

defineProps(['id'])

 const emit = defineEmits(['delete-blog-post'])

function emitDeletePostEvent(id) {
    emit('delete-blog-post', id)
}

let blogPostContent = defineModel('blogPostContent')
let blogPostTitle = defineModel('blogPostTitle')

</script>

<style scoped>

.blog-post{
    background-color: aqua;
    padding: 10px;
    margin-bottom: 10px;
}

input{
    width: 100%;
}

</style>