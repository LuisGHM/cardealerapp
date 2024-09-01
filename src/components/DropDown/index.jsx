export default function Dropdown({ label, options, selectedValue, onChange }) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 mb-2 font-semibold">{label}</label>
      <select
        className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border rounded-md p-2"
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
