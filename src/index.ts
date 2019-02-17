import './common/env'
import http from 'http'
import os from 'os'
import log from './common/logger'
import app from './app'

const port = parseInt(process.env.PORT || '3000', 10)
const welcome = (port: number) => () =>
  log.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${port}`)
http.createServer(app).listen(port, welcome(port))

export default app
