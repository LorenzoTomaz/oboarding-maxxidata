import ValidationError from '../../../common/exceptions/ValidationError';
import CommonService from '../../../common/CommonService';
import paginate from '../../../common/Paginate';
import projection from '../../../common/Projection';
import { Op } from 'sequelize';
/* import ApplicationError from '../../../common/exceptions/ApplicationError'; */
import * as messages from 'i18n';
import TypeMemberValidation from './TypeMemberValidation';
const db = require('../../../../models/');
const model = db.type_members;


class TypeMemberService extends CommonService {
  constructor() {
    super(model, TypeMemberValidation);
  }
  async validate(operation, data) {
    if (
      TypeMemberValidation != null &&
      Object.keys(TypeMemberValidation) != null &&
      Object.keys(TypeMemberValidation).length > 0 &&
      operation != null &&
      TypeMemberValidation[operation] != null
    ) {
      await TypeMemberValidation[operation].strict().validate(data);
    }
  }
  async all({ title = null, active = true, page = 0, pageSize = 10, select = null }) {
    const pagination = paginate(page, pageSize);
    const attributes = projection(select);
    const conditions = [];
    /* const where = { active }; */

    if (title != null && title !== '') {
      conditions.push({ situacao: { [Op.iLike]: `%title%` } });
    }

    /* if (conditions.length > 0) {
      where[Op.or] = conditions;
    } */

    /* const count = await model.count({ where }); */
    const count = await model.count();
    const items = await model.findAll({
      order: [['id', 'ASC'], ['situacao', 'ASC']],
      attributes,
      /* where, */
      ...pagination
    });

    return { items, page, pageSize, count };
  }

  async create(technology) {
    await this.validate('create', technology);
    return model.create(technology);
  }

  byId(id) {
    return model.findOne({ where: { id } });
  }

  updateById(id, technology) {
    return model.update(technology, { where: { id } });
  }

  async deleteById(id) {
    try {
      const technology = await model.destroy({ where: { id } });

      return technology;
    } catch (error) {
      if (error.name == 'SequelizeForeignKeyConstraintError') {
        throw new ValidationError(messages.__('validation.field.delete'), '*');
      }

      throw error;
    }
  }
}

export default new TypeMemberService();
