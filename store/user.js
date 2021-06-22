export const state = () => ({
    user: {}
})

export const getters = {
    getUser: (state) => state.user,

}

export const mutation = {}

export const action = {
    login() {

    },
    inscription() {

    },
    update() { },
    delUser: (state) => state.user = {},
}
