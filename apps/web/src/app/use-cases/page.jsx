"use client";

import usecases from "@/data/usecases.json";
import { useState } from "react";

export default function UseCasesPage() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Use Cases
      </h1>

      <p style={{ marginBottom: "30px" }}>
        Discover how different users can benefit from our platform.
      </p>

      {usecases.map((item, index) => (
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
            {active === index ? "Hide Details" : "View Details"}
          </button>

          {active === index && (
            <ul style={{ marginTop: "10px" }}>
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}