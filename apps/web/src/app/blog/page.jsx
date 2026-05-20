"use client";

import posts from "@/data/posts.json";
import { useRouter } from "next/navigation";

export default function BlogPage() {
  const router = useRouter();

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Blog</h1>

      {posts.map((post) => (
        <div
          key={post.slug}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <small>{post.date}</small>

          <br />
          <br />

          <button onClick={() => router.push(`/blog/${post.slug}`)}>
            Read More
          </button>
        </div>
      ))}
    </div>
  );
}