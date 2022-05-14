import Question from "../models/question.js";
import User from "../models/User.js";

export const submitQuestion = async (req, res) => {
  const user = await User.find({ _id: req.body.userId });

  const newQuestion = new Question({
    title: req.body.title,
    description: req.body.description,
    user: user[0],
  });

  newQuestion
    .save()
    .then((question) => res.status(201).json({ question }))
    .catch((err) =>
      res.status(500).json({ message: "could not submit your quetion!" })
    );
};

export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().sort({ _id: -1 });

    res.status(200).json(questions);
  } catch (error) {
    res.status(404).json({ message: "could not fetch questions!" });
  }
};

export const submitAnswer = async (req, res) => {
  try {
    const id = req.body.id;
    const answer = req.body.answer;
    const name = req.body.name;
    const ansData = { answer, name };

    const question = await Question.findById(id);

    question.answers.push(ansData);

    const updatedQuestion = await Question.findByIdAndUpdate(id, question, {
      new: true,
    });

    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(404).json(error);
  }
};
