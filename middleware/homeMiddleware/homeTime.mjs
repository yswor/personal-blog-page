const homeTime = function(req, res, next) {
    res.append('from', 'homeTimeMiddleware')
    next()
}

export default homeTime