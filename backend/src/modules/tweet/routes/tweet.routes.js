import { Router } from 'express';
import { createTweet, deleteTweet, getUserTweets, updateTweet } from './tweet.controller.js'
import {verifyJWT} from '../../common/middleware/auth.js'

const router = Router();
router.use(verifyJWT);

router.route("/").post(createTweet);
router.route("/user/:userId").get(getUserTweets);
router.route("/:tweetId").patch(updateTweet).delete(deleteTweet);

export default router