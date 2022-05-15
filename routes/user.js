import express from "express";

import { addUserData } from "../controllers/user.js";

const router = express.Router();

router.post("/addUserData", addUserData);

export default router;
