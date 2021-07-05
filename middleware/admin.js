let storage = require('store')
export default async function ({ redirect, store }) {
    let auth = store.state.admin.authenticatedStaff
    console.log(auth)
    if (auth == false) return redirect('/admin/login')

}