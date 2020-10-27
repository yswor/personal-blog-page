import express from 'express'
import home from './home.mjs'
import post from './post.mjs'

const router = express.Router()

export default function(app) {
    home(router)
    post(router)
    app.use(router)
}