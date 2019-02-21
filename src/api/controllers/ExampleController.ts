import { Request, Response } from 'express'
import ExamplesService from '@src/api/services/ExamplesService'

export class ExampleController {
  all(req: Request, res: Response): void {
    ExamplesService.all().then(r => res.json(r))
  }

  byId(req: Request, res: Response): void {
    ExamplesService.byId(req.params.id).then(r => {
      if (r) res.json(r)
      else res.status(404).end()
    })
  }

  create(req: Request, res: Response): void {
    ExamplesService.create(req.body.name).then(r =>
      res
        .status(201)
        .location(`<%= apiRoot %>/examples/${r.id}`)
        .json(r)
    )
  }

  error(req: Request, res: Response): void {
    throw new Error('error test')
  }
}
export default new ExampleController()
