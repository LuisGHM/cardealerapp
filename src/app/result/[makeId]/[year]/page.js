"use client"
import { VehicleModels } from '@/components/Lists/CarList';
import { Suspense } from 'react';

export default function ResultPage({ params }) {
  const { makeId, year } = params;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Vehicle Models for {year}</h1>
      <Suspense fallback={<p className="text-center">Loading models...</p>}>
        <VehicleModels makeId={makeId} year={year} />
      </Suspense>
    </div>
  );
}
