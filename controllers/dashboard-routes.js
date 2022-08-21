const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');

// GET all blog posts for user dashboard
router.get('/', async (req, res) => {
  try {
    const dbBlogPosts = await BlogPost.findAll({where: {user_id: req.session.user}});
    const blogPosts = dbBlogPosts.map(blogPostData => blogPostData.get({plain:true}));
    // Send over the 'loggedIn' session variable to the 'dashboard' template
    res.render('dashboard', {
      loggedIn: req.session.loggedIn,
      blogPosts: blogPosts
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;