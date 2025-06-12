import express from "express";
import {protectRoute} from '../middlewares/auth.middleware.js'
import {
  acceptFriendRequest,
  getFriendRequests,
  getMyFriends,
  getOutgoingFriendReqs,
  getRecommendedUsers,
  sendFriendRequest,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.use(protectRoute);

userRouter.get("/", getRecommendedUsers);
userRouter.get("/friends", getMyFriends);

userRouter.post("/friend-request/:id", sendFriendRequest);
userRouter.put("/friend-request/:id/accept", acceptFriendRequest);

userRouter.get("/friend-requests", getFriendRequests);
userRouter.get("/outgoing-friend-requests", getOutgoingFriendReqs);

export default userRouter;