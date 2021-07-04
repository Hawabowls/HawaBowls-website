export default function ({ redirect, store }) {
    let auth = store.state.admin.authenticatedStaff
    console.log(auth)
    if (!auth) {
        return redirect('/admin/login')
    }
}