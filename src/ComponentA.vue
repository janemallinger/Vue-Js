<template>
    <div style="background-color: lightgreen; padding: 5px;">
        this is the child component 
        <ComponentB></ComponentB>
        <ComponentB></ComponentB>
        <ComponentB></ComponentB>
    </div>
</template>

<script setup>
import ComponentB from './ComponentB.vue';
</script>

<style scoped>

</style>