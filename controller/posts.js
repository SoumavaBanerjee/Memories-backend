import postMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    console.log("Hitting post server");
    const postMessages = await postMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new postMessage(post);

  try {
    await newPost.save();
    res.status(201).json(post);
    console.log("hitting saved posts function");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
