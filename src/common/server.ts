import express, { Application } from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import swaggerify from './swagger'

export default class ExpressServer {
  private app: Application

  constructor() {
    this.app = express()

    const root = path.normalize(__dirname + '/../..')
    this.app.set('appPath', root + 'client')
    this.app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }))
    this.app.use(bodyParser.urlencoded({ extended: true, limit: process.env.REQUEST_LIMIT || '100kb' }))
    this.app.use(cookieParser(process.env.SESSION_SECRET))
    this.app.use(express.static(`${root}/public`))
  }

  router(routes: (app: Application) => void): Application {
    swaggerify(this.app, routes)
    return this.app
  }
}
