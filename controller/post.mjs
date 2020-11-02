const post = {
    index(req, res) {
         res.render('')
    },
    create(req, res) {
        res.send('The post:create controller')
    },
    like(req, res) {
        res.send('The post:like controller')
    },
    comment(req, res) {
        res.send('The post:comment controller')
    },
}

export default post