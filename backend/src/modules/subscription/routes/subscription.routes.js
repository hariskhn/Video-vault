import { Router } from "express";
import { toggleSubscription, getUserChannelSubscribers, getSubscribedChannels } from './subscription.controller.js'
import { verifyJWT } from '../../common/middleware/auth.js';

const router = Router();
router.use(verifyJWT);

router
    .route("/c/:channelId")
    .get(getSubscribedChannels)
    .post(toggleSubscription);

router.route("/u/:subscriberId").get(getUserChannelSubscribers);

export default router