import { useState } from "react";
import { IdeaForm } from "./components/IdeaForm";
import { EvaluationResult } from "./components/EvaluationResult";
import type { EvaluationResponse } from "./types";
import { evaluateIdea } from "./api/evaluateIdea";

function App() {
  const [result, setResult] = useState<EvaluationResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (idea: string) => {
    setLoading(true);
    setResult(null);

    try {
      const response = await evaluateIdea(idea);
      setResult(response);
    } catch (err) {
      console.error(err);
      alert("Evaluation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="border-bottom bg-white">
        <div className="container py-4">
          <h1 className="fw-bold mb-1">AI Innovation Screener</h1>
          <p className="text-muted mb-0">
            Evaluate ideas by desirability, feasibility, and viability
          </p>
        </div>
      </header>

      <main className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm p-4">
              <IdeaForm onSubmit={handleSubmit} loading={loading} />
              {result && (
                <div className="mt-4">
                  <EvaluationResult data={result} />
                </div>
              )}
            </div>
          </div>

        </div>
      </main>

    </>
  );
}

export default App;
