const { User } = require('../models');

const userData = [
  {
    username: 'SalLovesPizza_95',
    password: '$2a$12$00Fq7iqaewR6ltS6L1kMqOOTQ7/2OYmZOL.rOwN5eVQOQDt1BODsW'
  },
  {
    username: 'Lernantino_81',
    password: '$2a$12$00Fq7iqaewR6ltS6L1kMqOOTQ7/2OYmZOL.rOwN5eVQOQDt1BODsW'
  },
  {
    username: 'AmikoIsTheBest',
    password: '$2a$12$00Fq7iqaewR6ltS6L1kMqOOTQ7/2OYmZOL.rOwN5eVQOQDt1BODsW'
  }
];

const seedUsers = () => User.destroy({where: {}}).then(() => User.bulkCreate(userData));

module.exports = seedUsers;