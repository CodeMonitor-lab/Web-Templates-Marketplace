import TemplateForm  from '@/components/forms/template-form';

export default function EditTemplatePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Edit Template</h1>

      <div className="rounded-2xl border p-6">
        <TemplateForm />
      </div>
    </div>
  );
}