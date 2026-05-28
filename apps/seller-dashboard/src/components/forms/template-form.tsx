'use client';

import  Input  from '@/components/ui/input';
import  Button  from '@/components/ui/button';

export default function TemplateForm() {
  return (
    <form className="space-y-4">
      <Input placeholder="Template Name" />

      <Input placeholder="Price" />

      <textarea
        placeholder="Description"
        className="min-h-[120px] w-full rounded-xl border p-4"
      />

      <Button>Save Template</Button>
    </form>
  );
}