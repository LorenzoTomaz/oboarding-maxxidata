'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /* static associate(models) {
      members.belongsTo(models.type_members, {foreignKey: 'type_member_id', as: 'type_member'})
    } */
  };
  members.init({
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    type_member_id: DataTypes.INTEGER,
    endereco: DataTypes.TEXT,
    situacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'members',
  });
  return members;
};