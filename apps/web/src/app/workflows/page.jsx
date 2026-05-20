"use client";

import workflows from "@/data/workflows.json";
import { useState } from "react";

export default function WorkflowsPage() {
  const [active, setActive] = useState(null);

  const getColor = (type) => {
    if (type === "trigger") return "#d1fae5";   // green
    if (type === "process") return "#e0e7ff";   // blue
    if (type === "action") return "#fef3c7";    // yellow
    if (type === "result") return "#fee2e2";    // red
    return "#eee";
  };

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Workflows
      </h1>

      <p style={{ marginBottom: "30px" }}>
        Visualize and manage your automated workflows step-by-step.
      </p>

      {workflows.map((workflow, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "25px",
            borderRadius: "8px"
          }}
        >
          <h2>{workflow.name}</h2>
          <p>{workflow.description}</p>

          <button
            style={{ marginTop: "10px" }}
            onClick={() =>
              setActive(active === index ? null : index)
            }
          >
            {active === index ? "Hide Flow" : "View Flow"}
          </button>

          {active === index && (
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "20px",
                flexWrap: "wrap"
              }}
            >
              {workflow.steps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    padding: "10px 15px",
                    background: getColor(step.type),
                    borderRadius: "6px",
                    border: "1px solid #ccc"
                  }}
                >
                  {step.title}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}