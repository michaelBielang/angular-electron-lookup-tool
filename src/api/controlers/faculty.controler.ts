/**
 * @author Christoph Bichlmeier
 * @license UNLICENSED
 */

import * as db from '../datastorage';
import errHandler from './services/error.handler';

export function faculty_index(req, res, next) {
  db.dbInterface.dbFunctions.getFaculties('hsa')
    .then(faculties => {
      res.status(200).json({
        message: 'faculty_index successful',
        facultyObjs: faculties,
      });
    }).catch(err => {
      errHandler.errResponse(res, err.message);
    });
}
