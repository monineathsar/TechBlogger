const router = require('express').Router();
const apiRoutes = require('./api');
const homePageRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const blogPostRoutes = require('./blogpost-routes');

router.use('/', homePageRoutes);
router.use('/myposts', dashboardRoutes);
router.use('/blogpost', blogPostRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });
  
module.exports = router;