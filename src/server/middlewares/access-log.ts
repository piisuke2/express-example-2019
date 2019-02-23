import { Request, Response, NextFunction } from 'express'
import log from '@utils/logger'

export default (req: Request, res: Response, next: NextFunction) => {
  log.info(`${req.method} ${req.url}`)
  next()
}
