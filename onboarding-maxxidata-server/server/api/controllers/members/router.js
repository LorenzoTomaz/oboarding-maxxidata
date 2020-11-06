import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .get('/', controller.get)
  .get('/:id', controller.getById)
  .post('/', controller.post)
  .put('/:id', controller.put)
  .delete('/:id', controller.delete);
