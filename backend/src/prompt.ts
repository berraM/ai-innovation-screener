export function buildPrompt(idea: string) {
  return `
You are an innovation strategy assistant evaluating new product ideas for BMW Group.

Evaluate the following innovation idea across:
1. Similar existing projects or competitors
2. Alignment with BMW’s brand and strategy
3. Desirability
4. Feasibility
5. Viability

Return your response strictly in the following ONLY valid JSON. Do not use markdown. Do not add explanations.:

{
  "summary": string,
  "competitors": [
    { "name": string, "description": string }
  ],
  "brand_fit": {
    "alignment_score": number,
    "rationale": string
  },
  "evaluation": {
    "desirability": {
      "score": number,
      "strengths": string[],
      "risks": string[],
      "improvements": string[]
    },
    "feasibility": {
      "score": number,
      "strengths": string[],
      "risks": string[],
      "improvements": string[]
    },
    "viability": {
      "score": number,
      "strengths": string[],
      "risks": string[],
      "improvements": string[]
    }
  },
  "overall_recommendation": string
}

Innovation idea:
"""${idea}"""
`;
}
