"use client";
import { useQuery } from "@tanstack/react-query";

export const VehicleModels = ({ makeId, year }) => {
    const fetchModelsForMakeIdYear = async () => {
        const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
        const data = await response.json();
        return data.Results;
    };

    const { data: models, error, isLoading } = useQuery({
        queryKey: ['models', makeId, year],
        queryFn: fetchModelsForMakeIdYear,
        suspense: true,
    });

    if (error) return <p>Failed to load data</p>;

    return (
        <ul>
            {models.map((model) => (
                <li key={model.Model_ID} className="mb-2">
                    {model.Model_Name}
                </li>
            ))}
        </ul>
    );
};
