import ResponseHandler from '../../../common/ResponseHandler';
import NotFoundError from '../../../common/exceptions/NotFoundError';
/* import Service from '../../services/members.service'; */
import Service from "./MemberService";
import l from '../../../common/logger';

export class Controller {
  async get(req, res) {
    try {
      l.debug(`Request -> ${JSON.stringify(req.ip)}`);
      const model = await Service.all(req.query);
      return res.json(model);
    } catch (e) {
      ResponseHandler.error(res, e);
    }
  }

  async getById(req, res) {
    try {
      const model = await Service.byId(req.params.id);

      if (!model) {
        throw new NotFoundError(req);
      }

      return res.json(model);
    } catch (e) {
      ResponseHandler.error(res, e);
    }
  }

  async post(req, res) {
    try {
      const model = await Service.create(req.body);

      return res.status(201).json(model);
    } catch (e) {
      ResponseHandler.error(res, e);
    }
  }

  async put(req, res) {
    try {
      const { id } = req.params;
      const { fields } = req.body;

      const model = await Service.updateById(id, {
        fields
      });

      return res.status(201).json(model);
    } catch (e) {
      ResponseHandler.error(res, e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const model = await Service.deleteById(id);

      return res.status(201).json(model);
    } catch (e) {
      ResponseHandler.error(res, e);
    }
  }
}

export default new Controller();
