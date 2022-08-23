const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');

// When user selects on a single post on home page
router.get('/:id', async (req, res) => {
    try {
        const dbBlogPost = await BlogPost.findOne({
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
                attributes:['username']
            }
            ]
        });
        const dbUser = await User.findOne({
            where: {id: req.session.user},
            attributes: ['username']});
    
        
        const user = dbUser.get({plain:true});
        const blogPost = dbBlogPost.get({plain:true});
         //Send over the 'loggedIn' session variable to the 'gallery' template
        res.status(201).render('viewsinglepost', {
            loggedIn: req.session.loggedIn,
            blogPost: blogPost,
            loginUser: user
        });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// When user selects on a single post on dashboard page in order to edit post
router.get('/:id/edit', async (req, res) => {
    try {
        const dbBlogPost = await BlogPost.findOne({
            where: {id: req.params.id, user_id: req.session.user},
            attributes: ['title', 'content', 'id']
        });

        if (dbBlogPost == null) {
            res.redirect('/myposts');
            return;
        }

        const blogPost = dbBlogPost.get({plain:true});
        // Send over the 'loggedIn' session variable to the 'gallery' template
        res.render('editblogpost', { 
            loggedIn: req.session.loggedIn,
            blogPost: blogPost
            });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const createBlogPost = await BlogPost.create(
            {
                user_id: req.session.user,
                title: req.body.title,
                content: req.body.content,
            },
        );
        res.status(201).send(createBlogPost);
    } catch (error) {
        res.status(404).send("Fail to update blog post.");
    }
});

  // when user updates a blog post
router.put('/:id', async (req, res) => {
    try {
        const updateBlogPost = await BlogPost.update(
            {
                user_id: req.session.user.id,
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
                id: req.params.id,
                user_id: req.session.user
            },
        });
        if (deleteBlogPost == null) {
            res.status(404).send();
        } else {
            res.status(201).send();
        }
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;