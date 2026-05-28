export default function TemplatesPage() {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Templates</h1>
  
          <a
            href="/templates/create"
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            Create Template
          </a>
        </div>
  
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border p-6">Template Card</div>
          <div className="rounded-2xl border p-6">Template Card</div>
          <div className="rounded-2xl border p-6">Template Card</div>
        </div>
      </div>
    );
  }