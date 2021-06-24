export const state = () => ({
    allProducts: [],
    product: {},
    dishProducts: [],
    drinkProducts: [],
    littledishProducts: []
})

export const getters = {
    getProducts: (state) => state.allProducts,
    getProduct: (state) => state.product,
    getDishProducts: (state) => state.dishProducts,
    getLittleDishProducts: (state) => state.dishProducts,
    getDrinkProducts: (state) => state.drinkProducts,
}

export const mutations = {
    setProducts: (state, products) => (state.allProducts = products),
    setDishProducts: (state) => (state.dishProducts = state.allProducts.filter(p => p.category == "poke")),
    setDrinkProducts: (state) => (state.drinkProducts = state.allProducts.filter(p => p.category == "boisson")),
    setLittleDishProducts: (state) => (state.littledishProducts = state.allProducts.filter(p => p.category == "entree")),
    removeProduct: (state, id) =>
        state.products.splice(
            state.products.findIndex((el) => el._id === id),
            1
        ),
}


export const actions = {

    async getAllProduct({ commit }) {
        try {
            let response = await this.$axios.get('/api/product');
            console.log(response.data)
            if (response.data) {
                commit('setProducts', response.data)
                commit('setDishProducts')
                commit('setLittleDishProducts')
                commit('setDrinkProducts')
            }
            return response.data

        } catch (e) {
            console.log(e)
        }


    },
    async getProduct({ commit }, payload) {
        try {
            let response = await this.$axios.get(`/api/product/${payload.id}`);
            console.log(response.data)
            if (response.data) {
                return response.data
            }


        } catch (e) {
            console.log(e)
        }


    },

    async updateProduct({ commit }, payload) {
        try {
            let tok = ""
            let response = await this.$axios.patch(`/api/product/${payload.id}`, payload.product,
                {
                    headers: {
                        Authorization: `Bearer ${tok}`
                    }
                });
            console.log(response.data)
            if (response.data) {
                return response.data

            }


        } catch (e) {
            console.log(e)
        }


    },

    async deleteProduct() {
        try {
            let tok = ""
            let response = await this.$axios.delete(`/api/product/${payload.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${tok}`
                    }
                });
            if (response.data) {
                return response.data

            }


        } catch (e) {
            console.log(e)
        }
    }

}
