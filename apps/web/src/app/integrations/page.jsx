"use client";

import integrationsData from "@/data/integrations.json";
import { useState } from "react";

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState(integrationsData);

  const toggleConnection = (index) => {
    const updated = [...integrations];

    updated[index].status =
      updated[index].status === "connected"
        ? "disconnected"
        : "connected";

    setIntegrations(updated);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Integrations
      </h1>

      <p style={{ marginBottom: "30px" }}>
        Connect your favorite tools and automate your workflow.
      </p>

      {integrations.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "8px"
          }}
        >
          <h2>{item.name}</h2>
          <p>{item.description}</p>

          <p style={{ marginTop: "10px" }}>
            Status:{" "}
            <strong>
              {item.status === "connected"
                ? "Connected"
                : "Disconnected"}
            </strong>
          </p>

          <button
            style={{ marginTop: "10px" }}
            onClick={() => toggleConnection(index)}
          >
            {item.status === "connected"
              ? "Disconnect"
              : "Connect"}
          </button>
        </div>
      ))}
    </div>
  );
}