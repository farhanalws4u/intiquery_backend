import express from "express";

import { registerUser, loginUser, googleLogin } from "../controllers/users.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/googleLogin", googleLogin);

export default router;
