export default function ({ redirect, store }) {
    let user = store.getters['user/getUser']
    console.log(user)
    if (!user) {
        return redirect('/login')
    }
}