import store from '../store/store'

export default  (to, from, next) => {
    console.log(to)
    if (to.name == 'logs' && !store.getters['getToken']) {
        next({ name: 'login'})
    } else {
        if( to.name != 'logs' && store.getters['getToken'] && to.name ) {
            next({name: 'logs'})
        } else {
            next()
        }
    }
}