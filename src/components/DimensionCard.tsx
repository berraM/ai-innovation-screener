import type { EvaluationDimension } from "../types";

interface Props {
  title: string;
  data: EvaluationDimension;
}

export function DimensionCard({ title, data }: Props) {
  return (
    <div className="card mb-4 shadow-sm h-100">
      <div className="card-body">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title mb-0">{title}</h5>
          <span className="badge bg-secondary fs-6">
            {data.score} / 10
          </span>
        </div>

        <Section title="Strengths" items={data.strengths} color="success" />

        <Section title="Risks" items={data.risks} color="danger" />

        <Section title="Improvements" items={data.improvements} color="warning" />
      </div>
    </div>
  );
}

function Section({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: "success" | "danger" | "warning";
}) {
  if (items.length === 0) return null;

  return (
    <div className="mb-3">
      <h6 className={`text-${color} mb-2`}>{title}</h6>
      <ul className="mb-0 ps-3">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
