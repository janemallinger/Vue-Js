import { ref } from "vue"

const isAuthenticated = ref(false)

const userRole = ref('')

const login = async (username, password) => {
    isAuthenticated.value = true
    userRole.value = username === 'vipUser' ? 'vip' : 'regular'
}

const logout = async () => {
    isAuthenticated.value = false
    userRole.value = ''
}

const getUserRole = () => {
    return userRole.value 
}

export { isAuthenticated, login, logout, getUserRole }