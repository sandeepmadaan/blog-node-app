'use strict';
module.exports = function(sequelize, DataTypes) {
  var todos = sequelize.define('todos', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        todos.hasMany(models.todo_items);
      }
    }
  });
  return todos;
};
