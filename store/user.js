export const state = () => ({
    user: {},
    token: {}
})

export const getters = {
    getUser: (state) => state.user,

}

export const mutation = {}

export const actions = {
    async login(payload) {
        try {
            const client = await this.$axios.post('api/product')
        } catch (error) {
            return { error: error.message }
        }
    },
    async register(payload) {
        try {
            const client = await this.$axios.post('/api/register', payload)
            console.log(client)
            return client
        } catch (error) {
            console.log(error)
            return { error: error.message }
        }

    },
    update() { },
    delUser: (state) => state.user = {},
}
