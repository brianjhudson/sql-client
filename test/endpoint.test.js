import test from 'ava';
import request from 'supertest';
import sinon from 'sinon';

import app from '../server';


test('get campuses', async t => {
   const res = await request(app)
      .get('/api/map/campus')
      .expect(200)
   
   t.truthy(res.body)
   t.truthy(Array.isArray(res.body))
   t.truthy(res.body.length)
})

test('get addresses', async t => {
   const res = await request(app)
      .get('/api/map/address?campus=1&startDate=2016-07-01&endDate=2017-06-01')
      .expect(200)
   
   t.truthy(res.body)
   t.truthy(Array.isArray(res.body), "Please return an array")
   t.truthy(res.body.length)
})

