const Sequelize = require('sequelize');
const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: 'db/todoapp-sample.db'
});

const ToDo = sequelize.define('ToDo', {
    subject: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    deadline: { type: Sequelize.DATE },
}, {
    tableName: 'todos',
    timestamps: false
})

module.exports = ToDo
