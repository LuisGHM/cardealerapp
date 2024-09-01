"use client"
import Dropdown from "@/components/DropDown";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";

export default function Home() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const { data: vehicleTypes = [] } = useQuery({
    queryKey: ['vehicleTypes'],
    queryFn: async () => {
      const res = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
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
    for (let year = 2015; year <= currentYear; year++) {
      yearOptions.push({ value: year, label: year });
    }
    return yearOptions;
  }, []);

  return (
    <main className="container mx-auto">
      <header>
        <h3 className="text-2xl font-bold mb-4">Car Dealer</h3>
      </header>

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

      <Link href={`/result/${selectedType}/${selectedYear}`} className={`bg-blue-500 text-white p-2 rounded ${!selectedType || !selectedYear ? 'opacity-50 cursor-not-allowed' : ''}`}>
          Next
      </Link>
    </main>
  );
}
