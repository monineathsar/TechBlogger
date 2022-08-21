const router = require('express').Router();
const { Comment } = require('../../models');

// When user adds a new comment under a blog post
router.post('/', async (req, res) => {

    try {
        const newComment = await Comment.create({
            user_id: req.session.user,
            content: req.body.content,
            blogPost_id: req.body.blogPost_id
        });
        console.log(newComment);
        res.status(200).send();
    } catch (e) {
        console.log(e);
    }
});

// When user updates a comment under a blog post
router.put('/:id', async (req, res) => {
    try {
        const updateComment = await Comment.update(
            {
                user_id: req.session.user.id,
                content: req.body.content,
                user: req.body.username,
                date: req.body.date,
            },
            {
                where: { id: req.params.id }
            }
        );
        res.send(updateComment);
    } catch (error) {
        res.status(404).send("Fail to update comment.");
    }
});

// when user deletes a comment under a blog post
router.delete('/:id', async (req, res) => {
    try {
        const deleteComment = await Comment.destroy({
            where: {
                id: req.params.id
            },
        });

        res.status(201).send();

    } catch (error) {
        console.error(error);
    }
});

module.exports = router;