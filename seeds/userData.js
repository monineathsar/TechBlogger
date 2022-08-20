const { User } = require('../models');

const userData = [
  {
    username: 'SalLovesPizza_95',
    password: 'password12345'
  },
  {
    username: 'Lernantino_81',
    password: 'password12345'
  },
  {
    username: 'AmikoIsTheBest',
    password: 'password12345'
  }
];

const seedUsers = () => User.destroy({where: {}}).then(() => User.bulkCreate(userData));

module.exports = seedUsers;