import home from '../controller/home.mjs'

export default function(router) {
    router.get('/', home.index)
}
