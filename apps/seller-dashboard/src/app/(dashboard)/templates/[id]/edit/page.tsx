"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TemplateForm from "@/components/forms/template-form";
import api from "@/lib/api/axios";

export default function EditTemplatePage() {
  const { id } = useParams();

  const [template, setTemplate] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const fetchTemplate = async () => {
      try {
        setLoading(true);

        const res = await api.get(`/templates/${id}`);

        const data = res?.data?.data || res?.data || null;

        if (!ignore) setTemplate(data);
      } catch (err) {
        console.error(err);
        if (!ignore) setTemplate(null);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    // ✅ BLOCK INVALID ID BEFORE API CALL
    if (id && typeof id === "string" && id.length === 24) {
      fetchTemplate();
    } else {
      setLoading(false);
      setTemplate(null);
    }

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!template)
    return <div>Template not found or invalid ID</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Edit Template
      </h1>

      <div className="rounded-2xl border p-6">
        <TemplateForm
          initialData={template}
          isEdit={true}
        />
      </div>
    </div>
  );
}