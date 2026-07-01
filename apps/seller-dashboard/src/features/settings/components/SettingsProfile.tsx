"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui";

export default function SettingsProfile() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    console.log("Profile updated:", form);
  };

  return (
    <div className="max-w-xl space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Profile Settings</h1>
        <p className="text-sm text-gray-500">
          Update your personal information.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <Input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />

        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <Button onClick={handleSave}>Save Changes</Button>
    </div>
  );
}