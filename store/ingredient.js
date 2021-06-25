export const state = () => ({
    ingredients: [],
    ingredient: {}
})

export const getters = {
    getIngredient: (state) => state.user,
}

export const mutation = {
    setIngredients: (state, ingredients) => (state.allIngredients = ingredients),
    setIngredient: (state, ingredient) => (state.ingredient = ingredient),
}


export const actions = {

    async getAllIngredients() {
        try {
            let response = await this.$axios.get('/api/ingredients');
            console.log(response.data)
            if (response.data) {
                commit('setIngredients', response.data)

            }
            return response.data

        } catch (e) {
            console.log(e)
        }
    },
    async getIngredient(payload) {
        try {
            let response = await this.$axios.get(`/api/ingredients/${payload}`);
            console.log(response.data)
            if (response.data) {
                commit('setIngredient', response.data)

            }
            return response.data

        } catch (e) {
            console.log(e)
        }
    }
}