import express from "express";
import cors from "cors";
import "dotenv/config";
import { evaluateIdea } from "./evaluate";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/evaluate", evaluateIdea);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
