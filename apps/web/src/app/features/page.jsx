"use client";

import features from "@/data/features.json";
import { useState } from "react";

export default function FeaturesPage() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Features</h1>

      <p style={{ marginBottom: "30px" }}>
        Explore the powerful features that make our SaaS platform stand out.
      </p>

      <div style={{ display: "grid", gap: "20px" }}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>

            <button
              style={{ marginTop: "10px" }}
              onClick={() => setActive(active === index ? null : index)}
            >
              {active === index ? "Hide Details" : "View Details"}
            </button>

            {active === index && (
              <ul style={{ marginTop: "10px" }}>
                {feature.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
