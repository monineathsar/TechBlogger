const router = require('express').Router();
const homePageRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const commentsRoutes = require('./comments-routes');

router.use('/', homePageRoutes);
router.use('/myposts', dashboardRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;