import chai from 'chai'
import supertest from 'supertest'
import app from '../../src/server'

const request = supertest(app) 
const expect = chai.expect

exports = {
        app,
        request,
        supertest
}
