import methodOverride  from 'method-override'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import errorHandler from 'errorhandler'
import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import routes from '../routes/index.mjs'

export default function(app) {
    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(methodOverride())
    app.use(cookieParser('secret-value'))
    const __dirname = dirname(fileURLToPath(import.meta.url))
    app.use(express.static('public/'))
    app.set('views', 'views')
    app.set('view engine', 'hbs')

    if (app.get('env') === 'development') {
        app.use(errorHandler())
    }

    routes(app)

    return app
}
