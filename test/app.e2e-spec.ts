import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { parse } from 'node-html-parser'
import { AppModule } from './../src/app.module';
import { assert } from 'console';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .then((response) => {
        const dom = parse(response.text)

        assert(dom.querySelector('h1').text === 'Wassup')
      })
  })

  it('/pages-api (GET)', () => {
    return request(app.getHttpServer())
      .get('/pages-api')
      .expect(200)
      .expect({ greeting: 'Wassup' });
  });
});
