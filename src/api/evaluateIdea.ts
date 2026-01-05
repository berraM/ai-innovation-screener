import type { EvaluationResponse } from "../types";

export async function evaluateIdea(
  idea: string
): Promise<EvaluationResponse> {
  const response = await fetch("http://localhost:3001/evaluate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idea }),
  });

  if (!response.ok) {
    throw new Error("Backend request failed");
  }

  return response.json();
}
