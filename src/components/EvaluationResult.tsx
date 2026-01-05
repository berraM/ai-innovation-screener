import type { EvaluationResponse } from "../types";
import { DimensionCard } from "./DimensionCard";

interface Props {
  data: EvaluationResponse;
}

export function EvaluationResult({ data }: Props) {
  return (
    <div className="mt-4">
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h3 className="card-title mb-2">Evaluation Summary</h3>
          <p className="card-text">{data.summary}</p>
        </div>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h4 className="card-title mb-3">Key Competitors</h4>
          <ul className="list-group list-group-flush">
            {data.competitors.map((c) => (
              <li key={c.name} className="list-group-item">
                <strong>{c.name}</strong>
                <div className="text-muted small">{c.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h4 className="card-title mb-2">
            Brand Fit{" "}
            <span className="badge bg-secondary ms-2">
              {data.brand_fit.alignment_score}/10
            </span>
          </h4>
          <p className="card-text">{data.brand_fit.rationale}</p>
        </div>
      </div>

      <div className="row d-flex">
        <div className="col-md-4">
          <DimensionCard
            title="Desirability"
            data={data.evaluation.desirability}
          />
        </div>
        <div className="col-md-4">
          <DimensionCard
            title="Feasibility"
            data={data.evaluation.feasibility}
          />
        </div>
        <div className="col-md-4">
          <DimensionCard
            title="Viability"
            data={data.evaluation.viability}
          />
        </div>
      </div>

      <div className="card shadow-sm mt-4">
        <div className="card-body">
          <h4 className="card-title">
            Overall Recommendation
          </h4>
          <p className="card-text">{data.overall_recommendation}</p>
        </div>
      </div>
    </div>
  );
}
