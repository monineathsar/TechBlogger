const router = require('express').Router();
const commentsRoutes = require('./comments-routes');
const userRoutes = require('./user-routes');


router.use('/comments', commentsRoutes);
router.use('/user', userRoutes);

module.exports = router;