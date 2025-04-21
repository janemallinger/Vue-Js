import { ref } from "vue"

const isAuthenticated = ref(false)

const login = async (username, password) => {
    isAuthenticated.value = true
}

const logout = async () => {
    isAuthenticated.value = false
}

export { isAuthenticated, login, logout }