'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface Event {
  id: number;
  title: string;
  slug: string;
  price: number;
  date: string;
  image: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const keyword = searchParams.get('keyword') || '';
  const startDate = searchParams.get('startDate') || '';
  const endDate = searchParams.get('endDate') || '';
  const city = searchParams.get('city') || '';
  const freeOnly = searchParams.get('freeOnly') === 'true';
  const categoryId = Number(searchParams.get('categoryId')) || 0;

  const [events, setEvents] = useState<Event[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const size = 12;

  useEffect(() => {
    setEvents([]);
    setPage(0);
    setHasMore(true);
    fetchSearchResults(0);
  }, [keyword, startDate, endDate, city, freeOnly, categoryId]);

  async function fetchSearchResults(currentPage: number) {
    setLoading(true);
    try {
      let url = `http://localhost:8080/api/events/search?page=${currentPage}&size=${size}`;
      if (keyword) url += `&keyword=${encodeURIComponent(keyword)}`;
      if (startDate) url += `&startDate=${startDate}`;
      if (endDate) url += `&endDate=${endDate}`;
      if (city) url += `&city=${encodeURIComponent(city)}`;
      if (freeOnly) url += `&freeOnly=true`;
      if (categoryId) url += `&categoryId=${categoryId}`;

      const res = await fetch(url);
      const data = await res.json();

      if (data.length === 0) {
        if (currentPage === 0) setEvents([]);
        setHasMore(false);
      } else {
        const mapped = data.map((e: any) => ({
          id: e.id,
          title: e.title,
          slug: e.slug,
          price: e.minTicketPrice || 0,
          date: e.startTime ? new Date(e.startTime).toLocaleDateString('vi-VN') : '',
          image: e.coverImageUrl || '/default.jpg',
        }));

        if (currentPage === 0) {
          setEvents(mapped);
        } else {
          setEvents((prev) => [...prev, ...mapped]);
        }

        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error('Error fetching search results', error);
    } finally {
      setLoading(false);
    }
  }

  const handleFilterChange = (newFilters: Partial<{
    city: string;
    startDate: string;
    endDate: string;
    freeOnly: boolean;
    categoryId: number;
  }>) => {
    const query = new URLSearchParams(searchParams.toString());

    if (newFilters.city !== undefined) query.set('city', newFilters.city);
    if (newFilters.startDate !== undefined) query.set('startDate', newFilters.startDate);
    if (newFilters.endDate !== undefined) query.set('endDate', newFilters.endDate);
    if (newFilters.freeOnly !== undefined) query.set('freeOnly', String(newFilters.freeOnly));
    if (newFilters.categoryId !== undefined) query.set('categoryId', String(newFilters.categoryId));

    query.set('page', '0');

    router.push(`/search?${query.toString()}`);
  };

  return (
    <div className="bg-[#1e1e1e] min-h-screen text-white">
      
    </div>
  );
}
