export default function ({ redirect, store }) {
    let user = store.state.user.authenticated
    if (!user) {
        return redirect('/login')
    }
}