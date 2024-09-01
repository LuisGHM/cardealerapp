import { VehicleModels } from '@/components/Lists/CarList';
import { Suspense } from 'react';

export default function ResultPage({ params }) {
  const { makeId, year } = params;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Modelos de Veículos para {year}</h1>
      <Suspense fallback={<p>Loading models...</p>}>
        <VehicleModels makeId={makeId} year={year} />
      </Suspense>
    </div>
  );
}
