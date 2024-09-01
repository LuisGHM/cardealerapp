"use client"
import Dropdown from "@/components/DropDown";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [years, setYears] = useState([]);

  useEffect(() => {
    fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
      .then((res) => res.json())
      .then((data) => {
        const options = data.Results.map((type) => ({
          value: type.MakeId,
          label: type.MakeName,
        }));
        setVehicleTypes(options);
      });
  }, []);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearOptions = [];
    for (let year = 2015; year <= currentYear; year++) {
      yearOptions.push({ value: year, label: year });
    }
    setYears(yearOptions);
  }, []);

  return (
    <main className="container mx-auto">
      <header>
        <h3 className="text-2xl font-bold mb-4">Car Dealer</h3>
      </header>

      <Dropdown
        label="Selecione o tipo de veículo"
        options={vehicleTypes}
        selectedValue={selectedType}
        onChange={setSelectedType}
      />

      <Dropdown
        label="Selecione o ano do modelo"
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