export interface EvaluationDimension {
  score: number;
  strengths: string[];
  risks: string[];
  improvements: string[];
}

export interface EvaluationResponse {
  summary: string;
  competitors: {
    name: string;
    description: string;
  }[];
  brand_fit: {
    alignment_score: number;
    rationale: string;
  };
  evaluation: {
    desirability: EvaluationDimension;
    feasibility: EvaluationDimension;
    viability: EvaluationDimension;
  };
  overall_recommendation: string;
}
