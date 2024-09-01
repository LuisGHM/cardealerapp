"use client"
import Dropdown from "@/components/DropDown";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const { data: vehicleTypes = [], error } = useQuery({
    queryKey: ['vehicleTypes'],
    queryFn: async () => {
      const res = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
      if (!res.ok) {
        throw new Error('Failed to fetch vehicle types');
      }
      const data = await res.json();
      return data.Results.map((type) => ({
        value: type.MakeId,
        label: type.MakeName,
      }));
    },
  });

  const years = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const yearOptions = [];
    for (let year = 2011; year <= currentYear; year++) {
      yearOptions.push({ value: year, label: year });
    }
    return yearOptions;
  }, []);

  return (
    <main className="container mx-auto px-4 py-6">
      <header className="mb-8">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-4">Car Dealer</h3>
      </header>

      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        {error && (
          <p className="text-red-500 text-center mb-4">Failed to load vehicle types. Please try again later.</p>
        )}

        <Dropdown
          label="Select Vehicle Type"
          options={vehicleTypes}
          selectedValue={selectedType}
          onChange={setSelectedType}
        />

        <Dropdown
          label="Select Model Year"
          options={years}
          selectedValue={selectedYear}
          onChange={setSelectedYear}
        />

        <Link href={`/result/${selectedType}/${selectedYear}`} className={`block w-full bg-blue-600 text-white text-center py-2 rounded-lg mt-4 transition ${!selectedType || !selectedYear ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}>
            Next
        </Link>
      </div>
    </main>
  );
}
