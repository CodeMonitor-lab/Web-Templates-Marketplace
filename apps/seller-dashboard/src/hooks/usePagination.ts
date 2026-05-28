'use client';

import { useState } from 'react';

export default function usePagination(initialPage = 1) {
  const [page, setPage] = useState(initialPage);

  const nextPage = () => setPage((prev) => prev + 1);

  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return {
    page,
    setPage,
    nextPage,
    prevPage,
  };
}