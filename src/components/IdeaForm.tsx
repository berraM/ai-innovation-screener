import { useState } from "react";

interface Props {
  onSubmit: (idea: string) => void;
  loading: boolean;
}

export function IdeaForm({ onSubmit, loading }: Props) {
  const [idea, setIdea] = useState("");

  const handleSubmit = () => {
    if (idea.trim()) {
      onSubmit(idea);
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h4 className="card-title mb-3">Innovation Idea</h4>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows={6}
            placeholder="Describe your innovation idea clearly and concisely..."
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary px-4"
            onClick={handleSubmit}
            disabled={loading || idea.trim().length === 0}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" />
                Evaluating...
              </>
            ) : (
              "Evaluate Idea"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
