import { VehicleModels } from '@/components/Lists/CarList';
import Link from 'next/link';
import { Suspense } from 'react';
import { generateStaticParams } from '@/lib/index';

export { generateStaticParams };

export default function ResultPage({ params }) {
  const { makeId, year } = params;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mx-auto">
          Vehicle Models for {year}
        </h1>
        <Link
          href="/"
          className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg"
        >
          &larr; Back
        </Link>
      </div>

      <Suspense fallback={<p className="text-center">Loading models...</p>}>
        <VehicleModels makeId={makeId} year={year} />
      </Suspense>
    </div>
  );
}
