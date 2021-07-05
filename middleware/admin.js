let storage = require('store')
export default async function ({ redirect, store }) {
    let auth = store.state.admin.authenticatedStaff
    if (storage.get("tokenAd")) {
        const client = await store.dispatch("admin/reconnection", storage.get("tokenAd"))

        if (client) {
            console.log('il est là');

        }
        return;
    } else {
        console.log('ici')
        /* if (!auth) return redirect('/admin/login') */

    }


}