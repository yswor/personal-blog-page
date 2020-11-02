import express from 'express'
import configure from './config/app.mjs'

const app = configure(express())

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log(`Server is running at  http://localhost:${app.get('port')}/`)
})
