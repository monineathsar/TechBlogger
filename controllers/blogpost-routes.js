const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');

// When user selects on a single post on home page
router.get('/:id', async (req, res) => {
    try {
      
      const dbBlogPost = await BlogPost.findAll({
        where: {id: req.params.id},
        include: [
          {
            model: Comment,
            attributes: ['id', 'content', 'created_at'],
            include: {
                model: User,
                attributes:['username']
            }
          },
          {
            model: User,
            attributes:['username','id']
          }
        ]
      });
  
      const blogPost = dbBlogPost.map(blogPostData => blogPostData.get({plain:true}));
      console.log(blogPost);
      console.log("helqwe");
      console.log(req.session.id);
      // Send over the 'loggedIn' session variable to the 'gallery' template
      res.render('viewsinglepost', { 
        loggedIn: req.session.loggedIn,
        user: req.session.id,
        blogPost: blogPost[0]
        });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const createBlogPost = await BlogPost.create(
            {
                user_id: req.session.user,
                title: req.body.title,
                content: req.body.content,
            },
        );
        res.status(201).send();
    } catch (error) {
        res.status(404).send("Fail to update blog post.");
    }
});

  // when user updates a blog post
router.put('/:id', async (req, res) => {
    try {
        const updateBlogPost = await BlogPost.update(
            {
                userId: req.session.user.id,
                title: req.body.title,
                content: req.body.content,
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
router.delete('/:id', async (req, res) => {
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