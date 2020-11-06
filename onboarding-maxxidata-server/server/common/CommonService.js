import * as messages from 'i18n';
import * as Sequelize from 'sequelize';

import ValidationError from '../common/exceptions/ValidationError';

import projection from './Projection';
import findAllAndCount from './FindAllAndCount';

const Op = Sequelize.Op;

export default class CommonService {
  constructor(model, validation, searchFields = [], order = [['id', 'DESC']]) {
    this.model = model;
    this.validation = validation;
    this.searchFields = searchFields;
    this.order = order;
  }

  async validate(operation, data) {
    if (
      this.validation &&
      Object.keys(this.validation).length > 0 &&
      this.validation[operation]
    ) {
      await this.validation[operation].strict().validate(data);
    }
  }

  async all(params, ignoreActive = false) {
    const { select, page, ignorePagination, active = true } = params;
    const queryOptions = {
      attributes: projection(select),
      // where: { active },
      order: this.order,
      include: [],
    };
    if (!ignoreActive) {
      queryOptions.where.active = active;
    }
    return await findAllAndCount(
      this.model,
      queryOptions,
      page,
      ignorePagination
    );
  }

  async allWithSearch(params) {
    const conditions = [];
    const { search, select, page, ignorePagination } = params;
    const queryOptions = {
      attributes: projection(select),
      order: this.order,
      where: {},
      include: [],
    };

    if (search != null && search !== '') {
      for (let searchField of this.searchFields) {
        conditions.push({ [searchField]: { [Op.iLike]: `%${search}%` } });
      }
    }
    if (conditions.length > 0) {
      queryOptions.where[Op.or] = conditions;
    }
    return await findAllAndCount(
      this.model,
      queryOptions,
      page,
      ignorePagination
    );
  }

  async allOrganizationsWithType(params, organizationTypeId) {
    const conditions = [];
    const { search, select, page, ignorePagination, active = true } = params;
    const queryOptions = {
      attributes: projection(select),
      where: { active, organizationTypeId },
      order: this.order,
      include: [],
    };

    if (search != null && search !== '') {
      for (let searchField of this.searchFields) {
        conditions.push({ [searchField]: { [Op.iLike]: `%${search}%` } });
      }
    }
    if (conditions.length > 0) {
      queryOptions.where[Op.or] = conditions;
    }
    return await findAllAndCount(
      this.model,
      queryOptions,
      page,
      ignorePagination
    );
  }

  async create(data) {
    await this.validate('create', data);
    return this.model.create(data);
  }

  async byId(id) {
    if (!id) {
      throw new ValidationError(
        messages.__('validation.field.isRequired'),
        'id'
      );
    }
    return this.model.findOne({ where: { id: id } });
  }

  async updateById(id, data) {
    if (!id) {
      throw new ValidationError(
        messages.__('validation.field.isRequired'),
        'id'
      );
    }
    await this.validate('update', data);
    return await this.model.update(data, {
      where: { id },
      returning: true,
      plain: true,
    });
  }

  async deleteById(id) {
    try {
      await this.model.update({ active: false }, { where: { id } });
    } catch (error) {
      if (error.name == 'SequelizeForeignKeyConstraintError') {
        throw new ValidationError(messages.__('validation.field.delete'), '*');
      }
      throw error;
    }
  }

  async physicalDeleteById(id) {
    return await this.model.destroy({
      where: {
        id,
      },
    });
  }
}
