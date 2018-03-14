'use strict';
module.exports = function(sequelize, DataTypes) {
  var todo_items= sequelize.define('todo_items', {
    name: DataTypes.STRING,
    todo_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        todo_items.belongsTo(models.todos);
      }
    }
  });
  return todo_items;
};

