import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import swaggerify from '@src/api/swagger'
import routes from '@src/api/swagger/routes'

const app = express()
const root = path.normalize(__dirname + '/..')
app.set('appPath', root + 'client')
app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }))
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: process.env.REQUEST_LIMIT || '100kb'
  })
)
app.use(cookieParser(process.env.SESSION_SECRET))
app.use(express.static(`${root}/public`))

swaggerify(app, routes)

export default app
