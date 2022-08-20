const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');

// GET all blog posts for user dashboard
router.get('/', async (req, res) => {
  try {
    const dbBlogPosts = await BlogPost.findAll({where: {user_id: req.session.user}});
    const blogPosts = dbBlogPosts.map(blogPostData => blogPostData.get({plain:true}));
    console.log(blogPosts);
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

// When user selects on a single post on their dashboard
router.get('/blogpost/:id', async (req, res) => {
  try {
    const dbSelectedBlogPost = await BlogPost.findByPk(req.params.id, {
        include: [ { model: Comment } ]
    });
    
    const selectedBlogPost = dbSelectedBlogPost.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'gallery' template
    res.render('viewBlogPost', { selectedBlogPost, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// when user creates a new blog post
router.post('/new', async (req, res) => {

    const newBlogPost = await BlogPost.create({
        userId: req.session.user.id,
        title: req.body.title,
        user: req.body.username,
        content: req.body.content,
        date: req.body.date,
    });

    res.send(newBlogPost);
});

// when user updates a blog post
router.put('/blogpost/:id', async (req, res) => {
    try {
        const updateBlogPost = await BlogPost.update(
            {
                userId: req.session.user.id,
                title: req.body.title,
                user: req.body.username,
                content: req.body.content,
                date: req.body.date,
            },
            {
                where: { id: req.params.id }
            }
        );
        res.send(updateBlogPost);
    } catch (error) {
        res.status(404).send("Fail to update blog post.");
    }
});

// when user deletes a blog post
router.delete('/blogpost/:id', async (req, res) => {
    try {
        const deleteBlogPost = await BlogPost.destroy({
            where: {
                id: req.params.id
            },
        });

        res.json(deleteBlogPost);

    } catch (error) {
        console.error(error);
    }
});


module.exports = router;