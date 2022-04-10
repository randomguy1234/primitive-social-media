const router= require('express').Router();
const {seeAllUsers, seeOneUser, newUser, editUser, removeUser}= require('../../controllers/user-controller');

//GET all route and POST route
router
    .route('/')
    .get(seeAllUsers)
    .post(newUser);

//GET 1, PUT, and DELETE route
router
    .route('/:id')
    .get(seeOneUser)
    .put(editUser)
    .delete(removeUser);
    
module.exports = router;    