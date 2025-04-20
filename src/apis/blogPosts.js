const BASE_URL = 'http://localhost:3000/blogPosts'

/**
 * 
 * @returns {Promise<Array>}
 */
const findAll = async () => {
    try {
        const response = await fetch(BASE_URL)
        if (!response.ok) {
            throw new Error(`Error fetching blog posts ${response.statusText}`)
        }
        return await response.json();
    } catch (error) {
        console.error(error)
        throw error
    }
}


/**
 * @param {number} id
 * @returns {Promise<Object>}
 */
const findById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`)
        if (!response.ok) {
            throw new Error(`Error fetching blog posts with ID ${id}: ${response.statusText}`)
        }
        return await response.json()
    } catch (error) {
        console.error(error)
        throw error
    }
}

export default { findAll, findById }




