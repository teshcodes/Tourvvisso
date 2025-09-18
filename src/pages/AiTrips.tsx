import { useState } from "react";
import SidebarNav from "../components/SidebarNav";
import Select, { components } from "react-select";
import type { SingleValueProps } from "react-select";
import type { OptionProps } from "react-select";
import { getData } from "country-list";

// --- Types ---
type CountryOptionType = {
  value: string;
  label: string;
  code: string; // ISO2 code (lowercased)
};

// --- Country options with flags ---
const countryOptions: CountryOptionType[] = getData().map((c) => ({
  value: c.name,
  label: c.name,
  code: c.code.toLowerCase(),
}));

// --- Custom option with flag ---
const CountryOption = (props: OptionProps<CountryOptionType>) => (
  <components.Option {...props}>
    <div className="flex items-center gap-2">
      {props.data.code && (
        <img
          src={`https://flagcdn.com/w20/${props.data.code}.png`}
          alt={props.data.label}
          className="w-5 h-4 object-cover rounded-sm"
        />
      )}
      <span>{props.data.label}</span>
    </div>
  </components.Option>
);

// --- Custom single value (selected item) ---
const CountrySingleValue = (props: SingleValueProps<CountryOptionType>) => (
  <components.SingleValue {...props}>
    <div className="flex items-center gap-2">
      {props.data.code && (
        <img
          src={`https://flagcdn.com/w20/${props.data.code}.png`}
          alt={props.data.label}
          className="w-5 h-4 object-cover rounded-sm"
        />
      )}
      <span>{props.data.label}</span>
    </div>
  </components.SingleValue>
);

export default function AiTrips() {
  const [form, setForm] = useState({
    country: "",
    duration: "",
    groupType: "",
    travelStyle: "",
    interests: "",
    budget: "",
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(form).some((field) => field === "")) {
      alert("Please fill in all fields before creating a trip.");
      return;
    }
    console.log("Trip created:", form);
  };

  const isFormComplete = Object.values(form).every((field) => field !== "");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-white shadow-lg w-64 transform transition-transform duration-300 z-30
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        <SidebarNav />
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 md:ml-64 px-15 py-15 relative">
        {/* Top bar on mobile */}
        <div className="flex items-center justify-between w-full md:hidden mb-6">
          <button
            className="bg-[#D87D4A] text-white px-3 py-2 rounded-md"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <h2 className="text-lg font-bold text-gray-800">AI Trip Planner</h2>
        </div>

        {/* Heading + Button */}
        <div className="flex items-center justify-between mb-4 ml-5 lg:w-[45pc]">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Add New Trips</h2>
            <p className="text-gray-600">View and generate AI travel plans</p>
          </div>
          <button
            disabled={!isFormComplete}
            className={`px-4 py-2 rounded-lg font-semibold transition 
              ${
                isFormComplete
                  ? "bg-[#256FF1] text-[#ECF2EF] hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            + Create a trip
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl space-y-6"
        >
          {/* Country */}
          <div className="flex flex-col">
            <label htmlFor="country" className="mb-2 font-medium text-gray-700">
              Country
            </label>
            <Select<CountryOptionType, false>
              id="country"
              name="country"
              options={countryOptions}
              value={
                form.country
                  ? countryOptions.find((c) => c.value === form.country) || null
                  : null
              }
              onChange={(selectedOption) =>
                setForm((prev) => ({
                  ...prev,
                  country: selectedOption?.value || "",
                }))
              }
              className="react-select-container"
              classNamePrefix="react-select"
              placeholder="Select a country..."
              isSearchable
              components={{
                Option: CountryOption,
                SingleValue: CountrySingleValue,
              }}
            />
          </div>

          {/* Duration */}
          <div className="flex flex-col">
            <label
              htmlFor="duration"
              className="mb-2 font-medium text-gray-700"
            >
              Duration
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              placeholder="Enter number of days (e.g., 5, 12)"
              className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#D87D4A]"
            />
          </div>

          {/* Group Type */}
          <div className="flex flex-col">
            <label
              htmlFor="groupType"
              className="mb-2 font-medium text-gray-700"
            >
              Group Type
            </label>
            <select
              id="groupType"
              name="groupType"
              value={form.groupType}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#D87D4A]"
            >
              <option value="">Select group type</option>
              <option value="solo">Solo</option>
              <option value="family">Family</option>
              <option value="friends">Friends</option>
              <option value="business">Business</option>
            </select>
          </div>

          {/* Travel Style */}
          <div className="flex flex-col">
            <label
              htmlFor="travelStyle"
              className="mb-2 font-medium text-gray-700"
            >
              Travel Style
            </label>
            <select
              id="travelStyle"
              name="travelStyle"
              value={form.travelStyle}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#D87D4A]"
            >
              <option value="">Select your travel style</option>
              <option value="relaxed">Relaxed</option>
              <option value="adventure">Adventure</option>
              <option value="culture">Culture</option>
              <option value="luxury">Luxury</option>
              <option value="nature">Nature & Outdoors</option>
              <option value="city">City Exploration</option>
            </select>
          </div>

          {/* Interests */}
          <div className="flex flex-col">
            <label
              htmlFor="interests"
              className="mb-2 font-medium text-gray-700"
            >
              Interests
            </label>
            <select
              id="interests"
              name="interests"
              value={form.interests}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#D87D4A]"
            >
              <option value="">Select interests</option>
              <option value="food">Food & Drinks</option>
              <option value="hiking">Hiking & Nature Walks</option>
              <option value="history">Historical Sites</option>
              <option value="museums">Museums & Art</option>
              <option value="water">Beaches & Water Activities</option>
              <option value="nightlife">Nightlife & Bars</option>
              <option value="photography">Photography Spots</option>
              <option value="shopping">Shopping</option>
              <option value="local">Local Experiences</option>
            </select>
          </div>

          {/* Budget Estimate */}
          <div className="flex flex-col">
            <label
              htmlFor="budget"
              className="mb-2 font-medium text-gray-700"
            >
              Budget Estimate
            </label>
            <select
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#D87D4A]"
            >
              <option value="">Select budget</option>
              <option value="low">Budget</option>
              <option value="medium">Mid-Range</option>
              <option value="high">Premium</option>
              <option value="extreme">Luxury</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#256FF1] text-[#ECF2EF] hover:bg-amber-400 font-semibold py-2 px-4 rounded transition"
          >
            Generate a trip
          </button>
        </form>
      </main>
    </div>
  );
}
