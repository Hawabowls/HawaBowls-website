export default function ({ redirect, store }) {
    let staff = store.getters['staff/getStaff']
    console.log(staff)
    if (!staff.email) {
        return redirect('/admin/login')
    }
}