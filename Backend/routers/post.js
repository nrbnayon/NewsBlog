const router = require('express').Router();

const { body } = require('express-validator');
const { createPost, deletePost, updatePost, getPost, getFeaturedPosts, 
    uploadImage, getPosts, searchPost, getRelatedPosts } = require('../controllers/post');
const multer = require('../middlewares/multer');
const { validate, postValidator } = require('../middlewares/postValidator');
const { parseData } = require('../middlewares');

router.post(
    "/create", 
    multer.single("thumbnail"), 
    parseData,
    postValidator, 
    validate, 
    createPost
);

router.put(
    "/:postId", 
    multer.single("thumbnail"), 
    parseData,
    postValidator, 
    validate, 
    updatePost
);

router.delete("/:postId", deletePost);
router.get("/single/:slug", getPost);
router.get("/featured-posts", getFeaturedPosts);
router.get("/posts", getPosts);
router.get("/search", searchPost);
router.get("/related-posts/:postId", getRelatedPosts);


router.post(
    "/uplaod-image", 
    multer.single("image"), 
    uploadImage
);
module.exports = router;
