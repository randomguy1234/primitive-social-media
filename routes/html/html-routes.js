const router= require('express').Router();
const path= require('path');

router.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '../../public/social-media.html'));
});

router.get('/allFriends', (req,res)=> {
    res.sendFile(path.join(__dirname, '../../public/friendsList.html'));
});

router.get('/addPost', (req,res)=> {
    res.sendFile(path.join(__dirname, '../../public/userPost.html'));
});

router.get('/addComment', (req,res)=> {
    res.sendFile(path.join(__dirname, '../../public/userComment.html'));
});

module.exports= router;