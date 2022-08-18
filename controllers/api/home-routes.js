const router = require('express').Router();
const { BlogPost, Comment } = require('../../models');

// GET all blog posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogPostData = await BlogPost.findAll({
      include: [ { model: Comment } ],
    });
    res.status(200).json(dbBlogPostData);

    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// When user selects on a single post on home page
router.get('/blogpost/:id', async (req, res) => {
  try {
    const dbSelectedBlogPost = await BlogPost.findByPk(req.params.id);

   const selectedBlogPost = dbSelectedBlogPost.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'gallery' template
    res.render('viewBlogPost', { selectedBlogPost, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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

module.exports = router;
