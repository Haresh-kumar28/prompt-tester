const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Groq = require("groq-sdk");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post("/api/generate", async (req, res) => {
  try {
    const { prompt, temperature = 0.7 } = req.body;

    if (!prompt) {
      return res.status(400).json({
        error: "Prompt is required",
      });
    }

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    res.json({
      text: response.choices[0].message.content,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message,
    });
  }
});

app.get("/", (req, res) => {
  res.send("Groq Backend Running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});