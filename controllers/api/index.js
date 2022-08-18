const router = require('express').Router();
const homePageRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const commentsRoutes = require('./comments-routes');
const userRoutes = require('./user-routes');

router.use('/', homePageRoutes);
router.use('/myposts', dashboardRoutes);
router.use('/comments', commentsRoutes);
router.use('/user', userRoutes);

module.exports = router;