import express from "express";

import {
  submitQuestion,
  getQuestions,
  submitAnswer,
} from "../controllers/question.js";

const router = express.Router();

router.post("/submitQuestion", submitQuestion);
router.get("/getQuestions", getQuestions);
router.post("/submitAnswer", submitAnswer);

export default router;
