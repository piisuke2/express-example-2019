import { Application } from 'express'
import ExampleController from '@api/controllers/ExampleController'

export default function routes(app: Application): void {
  app.post('/api/v1/examples', ExampleController.create)
  app.get('/api/v1/examples', ExampleController.all)
  app.get('/api/v1/examples/:id', ExampleController.byId)
  app.get('/api/v1/examples/throw/error', ExampleController.error)
}
