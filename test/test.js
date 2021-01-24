'use strict';
const request = require('supertest');
const app = require('../app');

describe('/posts', () => {
  test('投稿一覧ページ', () => {
    return request(app)
      .get('/posts')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200);
  });
});