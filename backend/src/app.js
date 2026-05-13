import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//ROUTES IMPORT
import { userRouter } from "./modules/user/index.js";
import { healthcheckRouter } from "./modules/healthcheck/index.js";
import { tweetRouter } from "./modules/tweet/index.js";
import { subscriptionRouter } from "./modules/subscription/index.js";
import { videoRouter } from "./modules/video/index.js";
import { commentRouter } from "./modules/comment/index.js";
import { likeRouter } from "./modules/like/index.js";
import { playlistRouter } from "./modules/playlist/index.js";

//ROUTES DECLARATION
app.use("/api/v1/users", userRouter);
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/tweets", tweetRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/videos", videoRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/likes", likeRouter);
app.use("/api/v1/playlists", playlistRouter);

export { app };
