import { createLogger, format, transports } from 'winston'
const { combine, timestamp, printf } = format

const logFormat = printf(({ level, message, timestamp }) => {
  // tslint:disable-next-line: strict-type-predicates
  const msg = typeof message === 'string' ? message : JSON.stringify(message)
  return `${timestamp} [${level}] ${msg}`
})

const log = createLogger({
  level: process.env.LOG_LEVEL,
  format: combine(format.colorize(), timestamp(), logFormat),
  transports: [new transports.Console()]
})

export default log
