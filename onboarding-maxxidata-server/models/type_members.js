'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class type_members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /* static associate(models) {
      // define association here
    } */
  };
  type_members.init({
    descricao: DataTypes.TEXT,
    situacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'type_members',
  });
  return type_members;
};