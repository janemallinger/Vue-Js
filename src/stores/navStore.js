import { ref } from 'vue'
import { useRouter } from 'vue-router'

const navRoutes = ref([])

export function useNavStore() {
    const router = useRouter()

    const updateNavRoutes = () => {
        const allRoutes = router.getRoutes()
        navRoutes.value = allRoutes.filter((route) => 
            route.meta?.isNavLink)
    } 

    if(navRoutes.value.length === 0) {
        updateNavRoutes()
    }

    return {
        navRoutes,
        updateNavRoutes,
    }
}