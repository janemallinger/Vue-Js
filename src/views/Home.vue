<template>
    <div>
        <h1>Welcome to Vue Router Demo</h1>
        <p>exlore the navigation bar to see routing in action</p>
        <button @click="handleLogout" v-if="isAuthenticated">Log out</button>
    </div>
</template>

<script setup>
import { isAuthenticated, logout } from '@/apis/auth';
import { useRouter } from 'vue-router'
import { useNavStore } from '@/stores/navStore';

const router = useRouter()
const { updateNavRoutes } = useNavStore()

const handleLogout = () => {
    if(router.hasRoute('vipExclusive')) {
        router.removeRoute('vipExclusive')
        updateNavRoutes()
    }
    logout()
}
</script>

<style lang="scss" scoped></style>