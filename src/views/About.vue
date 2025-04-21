<template>
    <div>
        <h1>This is the about page</h1>
    </div>
</template>

<script setup>
import { onBeforeRouteLeave } from 'vue-router';

onBeforeRouteLeave((to, from) => {
    window.alert('Don\'t forget to like us on facebook!')
})
</script>

<style lang="scss" scoped></style>