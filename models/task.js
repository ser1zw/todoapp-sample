const Sequelize = require('sequelize');
const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: 'db/todoapp-sample.db'
});

const Task = sequelize.define('Task', {
    subject: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    deadline: { type: Sequelize.DATE },
}, {
    tableName: 'tasks',
    timestamps: false
})

module.exports = Task
