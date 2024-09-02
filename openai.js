import express from "express";
import { OpenAI } from "openai";

const app = express();
const PORT = 3000;

const openai = new OpenAI({
  organization: "org-gtZLp3kruvz1UlFHPqIz3rPh",
  project: "proj_qialiGxQ3FqIArVrDjQPsltt",
});

app.use(express.json());

app.post("/openai", async (req, res) => {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Please make a joke" }],
      model: "gpt-4o-mini",
    });
    res.json(chatCompletion.choices[0].message.content);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong!");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
