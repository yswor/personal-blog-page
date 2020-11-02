import methodOverride  from 'method-override'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import errorHandler from 'errorhandler'
import express from 'express'
import routes from '../routes/index.mjs'
import settings from './settings.mjs'
import session from 'express-session'
import connectMongo from 'connect-mongo'
import flash from 'connect-flash'

export default function(app) {
    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(methodOverride())
    app.use(flash())

    const MongoStore = connectMongo(session)
    const store = new MongoStore({
        db: settings.db,
        host: settings.host,
        port: settings.port,
        url: `mongodb://${settings.host}:${settings.port}/blog`
    })
    app.use(session({
        secret: settings.cookieSecret,
        key: settings.db,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 }, // 30天
        store,
        saveUninitialized: false,
        resave: false
    }))

    app.use(cookieParser('secret-value'))
    app.use(express.static('public/'))
    app.set('views', 'views')
    app.set('view engine', 'hbs')

    if (app.get('env') === 'development') {
        app.use(errorHandler())
    }


    routes(app)

    return app
}
