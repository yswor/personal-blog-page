import settings from '../settings.mjs'
import MongoDB from 'mongodb'

const { Db, Server, Connection } = MongoDB
const db = new Db(settings.db, new Server(settings.host, settings.port), { safe: true })

export default db