/**
 * @author Michael Bielang, Christoph Bichlmeier
 * @license UNLICENSED
 */

import 'mocha';
import {expect} from 'chai';
import * as server from '../../server';
import * as request from 'supertest';
import * as db from '../../datastorage/dbInterface';


describe('test faculties', function () {

  this.timeout(10000);
  it('test if faculties are callable', async function () {

    await db.dbFunctions.initDbCon();
    return request(server.default.api)
      .get('/api/faculties/')
      .then(res => {
        const status = res.status === 200;
        const contentPresent = JSON.stringify(res.body.facultyObjs).includes('Mechatronik');
        expect(contentPresent && status).to.eql(true);
      }).then(() => {
        server.default.apiObj.close();
      }).catch(err => {
        console.log('error: \n' + err);
        server.default.apiObj.close();
      });
  });
});
