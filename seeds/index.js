const seedUsers = require('./userData');
const seedBlogData = require('./blogPostData');
const seedCommentData = require('./commentData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS DATA SEEDED -----\n');

  await seedBlogData();
  console.log('\n----- BLOG-POST DATA SEEDED -----\n');

  await seedCommentData();
  console.log('\n----- COMMENTS DATA SEEDED -----\n');

  process.exit(0);
};

seedAll();