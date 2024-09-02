'use client';
import { useQuery } from '@tanstack/react-query';

export const VehicleModels = ({ makeId, year }) => {
  const fetchModelsForMakeIdYear = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    const data = await response.json();
    return data.Results;
  };

  const { data: models, error } = useQuery({
    queryKey: ['models', makeId, year],
    queryFn: fetchModelsForMakeIdYear,
    suspense: true,
  });

  if (error)
    return <p className="text-red-500 text-center">Failed to load data</p>;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {models.map((model) => (
        <li
          key={model.Model_ID}
          className="bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition"
        >
          <p className="text-lg font-semibold text-gray-800">
            {model.Model_Name}
          </p>
        </li>
      ))}
    </ul>
  );
};
