import http from 'http'
import os from 'os'
import dotenv from 'dotenv'
import log from '@src/common/logger'
import app from '@src/app'

dotenv.config()

const port = parseInt(process.env.PORT || '3000', 10)
const welcome = (port: number) => () =>
  log.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${port}`)
http.createServer(app).listen(port, welcome(port))

export default app
