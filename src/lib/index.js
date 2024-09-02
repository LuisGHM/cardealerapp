export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/GetMakesForVehicleType/car?format=json`
  );
  const data = await res.json();

  const vehicleTypes = data.Results.map((type) => type.MakeId);

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = 2015; year <= currentYear; year++) {
    years.push(year.toString());
  }

  const paths = vehicleTypes.flatMap((type) => {
    return years.map((year) => ({
      makeId: type.toString(),
      year: year,
    }));
  });

  return paths;
}
