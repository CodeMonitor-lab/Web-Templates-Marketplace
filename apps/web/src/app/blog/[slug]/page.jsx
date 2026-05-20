"use client";

import { useParams } from "next/navigation";
import posts from "@/data/posts.json";

export default function BlogDetail() {
  const { slug } = useParams();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div style={{ padding: "40px" }}>Post not found</div>;
  }

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{post.title}</h1>
      <p>{post.date}</p>

      <p style={{ marginTop: "20px" }}>{post.content}</p>
    </div>
  );
}