import type { Request, Response } from "express";
import OpenAI from "openai";
import { buildPrompt } from "./prompt";
import "dotenv/config";

const MODEL = process.env.LLM_MODEL || "nex-agi/deepseek-v3.1-nex-n1:free"

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function evaluateIdea(req: Request, res: Response) {
  const { idea } = req.body;
  try {
    const completion = await openai.chat.completions.create(
    {
        model: MODEL,
        messages: [
        { role: "system", content: "You are a helpful assistant. Respond with ONLY valid JSON. Do not use markdown. Do not add explanations." },
        { role: "user", content: buildPrompt(idea) }
        ],
        temperature: 0.3,
    }
    );


    const content = completion.choices[0].message.content;

    if (!content) {
      throw new Error("Empty response from LLM");
    }

    const jsonString = extractJson(content);
    const parsed = JSON.parse(jsonString);

    res.json(parsed);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Evaluation failed" });
  }
}

function extractJson(text: string): string {
  // Clean up LLM output
  const cleaned = text
    .replace(/```json\s*/i, "")
    .replace(/```/g, "")
    .trim();
  return cleaned;
}
