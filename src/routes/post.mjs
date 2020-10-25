import post from '../controller/post.mjs'

export default function(router) {
    router.get('/post/:id', post.index)
    router.post('/post', post.create)
    router.post('/post/:id/like', post.like)
    router.post('/post/:id/comment', post.comment)
}