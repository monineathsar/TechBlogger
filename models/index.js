const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
});

BlogPost.hasMany(Comment, {
    foreignKey: 'blogPost_id'
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'blogPost_id',
});

module.exports = { User,  BlogPost, Comment }