import express from "express";
import mongoose from "mongoose";
import Comment from "../models/Comment.js";

const commentRouter = express.Router();

commentRouter.get("/:movie_id", async (req, res) => {
  try {
    const comments = await Comment.findById (req.params.movie_id) ;
    res.status(200).json(comments);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

commentRouter.post("/", async (req, res) => {
    try {
        const { name, movie_id, text } = req.body;

        const movieId = new mongoose.Types.ObjectId(String(movie_id));

        const comment = new Comment({ name, movie_id: movieId, text })
        await comment.save();

        res.status(201).json(comment);
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: e.message })
    }
})




export default commentRouter;