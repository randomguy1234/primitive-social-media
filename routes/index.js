const router= require('express').Router();
const apiRoutes= require('./api');
const htmlRoutes= require('./html/html-routes');

//use all routes
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

//create error route
router.use((req, res) => {
    res.status(404).send('WARNING: 404 ERROR! Please double check the url.')
});

module.exports= router;