"use client";

import automations from "@/data/automations.json";
import { useState } from "react";

export default function AutomationPage() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Automation
      </h1>

      <p style={{ marginBottom: "30px" }}>
        Automate repetitive tasks and focus on what matters most.
      </p>

      {automations.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "8px"
          }}
        >
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          <button
            style={{ marginTop: "10px" }}
            onClick={() =>
              setActive(active === index ? null : index)
            }
          >
            {active === index ? "Hide Workflow" : "View Workflow"}
          </button>

          {active === index && (
            <ol style={{ marginTop: "10px" }}>
              {item.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          )}
        </div>
      ))}
    </div>
  );
}