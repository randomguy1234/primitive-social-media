const router= require('express').Router();
const apiRoutes= require('./api');
//unnsure to add html route

//use all routes
router.use('/api', apiRoutes);

//create error route
router.use((req, res) => {
    res.status(404).send('WARNING: 404 ERROR! Please double check the url.')
});

module.exports= router;