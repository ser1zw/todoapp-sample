const Sequelize = require('sequelize');
const moment = require('moment-timezone')

const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: 'db/todoapp.db'
});

const Task = sequelize.define('Task', {
    subject: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    deadline: {
        type: Sequelize.DATE,
        get() {
            return moment(this.getDataValue('deadline'), 'YYYY-MM-DD HH:mm:ss.SSS ZZ').format('YYYY/MM/DD HH:mm')
        }
    },
}, {
    tableName: 'tasks',
    timestamps: false
})

module.exports = Task
