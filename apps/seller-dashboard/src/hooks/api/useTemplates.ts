'use client';

import { useEffect, useState } from 'react';
import templateService from '@/services/template.service';

export default function useTemplates() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const data = await templateService.getTemplates();

        setTemplates(data);
      } finally {
        setLoading(false);
      }
    }

    fetchTemplates();
  }, []);

  return {
    templates,
    loading,
  };
}