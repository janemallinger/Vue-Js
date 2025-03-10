<template>
    <div class="blog-post">
        <p>
            {{ message }}
        </p>

        <h2>{{ id }} - {{ blogPostTitle }}</h2>
        <h4>{{ blogPostContent }}</h4>
        <button @click="$emit('delete-blog-post', id)">Delete Post</button>
        <button @click="emitDeletePostEvent(id)">Delete Post</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'

let message = ref('This is is the BlogPost component.')

defineProps(['id','blogPostTitle','blogPostContent'])

 const emit = defineEmits(['delete-blog-post'])

function emitDeletePostEvent(id) {
    emit('delete-blog-post', id)
}

</script>

<style scoped>

.blog-post{
    background-color: aqua;
    padding: 10px;
    margin-bottom: 10px;
}

</style>