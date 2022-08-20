const { User } = require('../models');

const userData = [
  {
    username: 'SalLovesPizza_95',
    password: '$2b$10$pzkd617K3Tll3avRlf/bceTHm4nBUTJKglTQooiDuaTFzjvkU0iia'
  },
  {
    username: 'Lernantino_81',
    password: '$2b$10$pzkd617K3Tll3avRlf/bceTHm4nBUTJKglTQooiDuaTFzjvkU0iia'
  },
  {
    username: 'AmikoIsTheBest',
    password: '$2b$10$pzkd617K3Tll3avRlf/bceTHm4nBUTJKglTQooiDuaTFzjvkU0iia'
  }
];

const seedUsers = () => User.destroy({where: {}}).then(() => User.bulkCreate(userData));

module.exports = seedUsers;