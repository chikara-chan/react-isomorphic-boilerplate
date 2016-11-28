import request from 'supertest'
import fs from 'fs'
import path from 'path'
import 'should'
import app from '../platforms/server'

describe('HTTP APP TEST', () => {
  it('should return json', done => {
    request(app)
      .get('/api')
      .expect(200, done)
  })
})
