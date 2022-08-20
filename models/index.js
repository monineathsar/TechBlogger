const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

// user has many blog posts
User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// blog post belongs to user
BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
});

// user can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// comment(s) belongs to specific blog posts
Comment.belongsTo(BlogPost, {
    foreignKey: 'blogPost_id',
});

// comment(s) belongs to specific users
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = { User,  BlogPost, Comment }