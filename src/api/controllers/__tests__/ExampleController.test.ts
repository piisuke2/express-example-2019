import request from 'supertest'
import delay from 'delay'
import app from '@src/app'

describe('Examples', () => {
  beforeAll(async () => {
    // issue: https://github.com/apigee-127/swagger-tools/issues/495
    await delay(100)
  })

  test('should get all examples', done =>
    request(app)
      .get('/api/v1/examples')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body).toBeInstanceOf(Object)
        expect(r.body).toHaveLength(2)
        done()
      }))

  test('should add a new example', done =>
    request(app)
      .post('/api/v1/examples')
      .send({ name: 'test' })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body).toBeInstanceOf(Object)
        expect(r.body).toHaveProperty('name', 'test')
        done()
      }))

  test('should get an example by id', done =>
    request(app)
      .get('/api/v1/examples/2')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body).toBeInstanceOf(Object)
        expect(r.body).toHaveProperty('name', 'test')
        done()
      }))
})
