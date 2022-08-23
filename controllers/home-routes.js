const router = require('express').Router();
const { BlogPost, Comment, User } = require('../models');

// GET all blog posts for homepage
router.get('/', async (req, res) => {
  if (!req.session.loggedIn) {
    return res.redirect('/login')
  }
  try {

    const dbBlogPostData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes:['username']
        }
      ]
    });
    const blogPosts = dbBlogPostData.map(blogPostData => blogPostData.get({plain:true}));
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
      blogPosts: blogPosts
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/new', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  res.render('newblogpost', {
    loggedIn: req.session.loggedIn
  });
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

// Signup route
router.get('/signup', (req, res) => {
  // Otherwise, render the 'login' template
  res.render('signup');
});


module.exports = router;
