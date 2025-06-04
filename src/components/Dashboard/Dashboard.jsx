import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import dayjs from "dayjs";
import user from "../../assets/user.png";
import medal from "../../assets/medal.png";
import profit from "../../assets/RV.png";
import seller from "../../assets/state.png";
import SubscriptionGrowth from "./SubscriptionGrowth";
import UsersGrowth from "./UsersGrowth";
import VendorGrowth from "./VendorGrowth";
import TotalRVView from "./TotalRVView";

function DashboardPage() {
  const currentYear = dayjs().year();
  const startYear = 1900;
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const [isOpen, setIsOpen] = useState(false);

  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const handleSelect = (year) => {
    setSelectedYear(year);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 mmd:grid-cols-3 lg:grid-cols-4 gap-2">
        <div className="flex flex-col items-center justify-center p-5 bg-white rounded-lg shadow-sm max-w-md bg-[#faaf37]">
          <h2 className="text-gray-700 text-lg font-medium mb-2">
            Total users
          </h2>

          <div className="rounded-full">
            <div className="flex items-center justify-center mb-2">
              <img
                src={user}
                alt="User Stats Icon"
                className="w-[52px] h-[52px]"
              />
            </div>
          </div>

          <p className="text-gray-900 text-4xl font-bold">
            {new Intl.NumberFormat().format(6500)}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-5 bg-white rounded-lg shadow-sm max-w-md bg-[#faaf37]">
          <h2 className="text-gray-700 text-lg font-medium mb-2">
            Total Vendor
          </h2>

          <div className="rounded-full">
            <div className="flex items-center justify-center mb-2">
              <img
                src={medal}
                alt="User Stats Icon"
                className="w-[52px] h-[52px]"
              />
            </div>
          </div>

          <p className="text-gray-900 text-4xl font-bold">
            {new Intl.NumberFormat().format(2650)}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-5 bg-white rounded-lg shadow-sm max-w-md bg-[#faaf37]">
          <h2 className="text-gray-700 text-lg font-medium mb-2">Total RV</h2>

          <div className="rounded-full">
            <div className="flex items-center justify-center mb-2">
              <img
                src={profit}
                alt="User Stats Icon"
                className="w-[52px] h-[52px]"
              />
            </div>
          </div>

          <p className="text-gray-900 text-4xl font-bold">
            {new Intl.NumberFormat().format(26500)}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-5 bg-white rounded-lg shadow-sm max-w-md bg-[#faaf37]">
          <h2 className="text-gray-700 text-lg font-medium mb-2">
            Total State
          </h2>

          <div className="rounded-full">
            <div className="flex items-center justify-center mb-2">
              <img
                src={seller}
                alt="User Stats Icon"
                className="w-[52px] h-[52px]"
              />
            </div>
          </div>

          <p className="text-gray-900 text-4xl font-bold">
            {new Intl.NumberFormat().format(2650)}
          </p>
        </div>
      </div>
      {/* .............. */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <div className="w-full p-5 bg-[#F9B038] rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row md:justify-between lg:justify-between items-center gap-5 my-5">
            <div>
              <h1 className="text-xl font-semibold">Users Growth</h1>
            </div>

            <div className="relative w-full md:w-32">
              {/* Selected Year Display */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md flex justify-between items-center bg-white transition"
              >
                <span className="text-[#0b7bb3]">{selectedYear}</span>
                <FaChevronDown className="text-[#0b7bb3] w-5 h-5 ml-5" />
              </button>

              {/* Dropdown List */}
              {isOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
                  {years.map((year) => (
                    <div
                      key={year}
                      onClick={() => handleSelect(year)}
                      className={`p-2 cursor-pointer hover:bg-gray-100 transition ${
                        year === selectedYear ? "bg-gray-200" : ""
                      }`}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <UsersGrowth />
        </div>
        <div className="w-full p-5 bg-[#F9B038] rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row md:justify-between lg:justify-between items-center gap-5 my-5">
            <div>
              <h1 className="text-xl font-semibold">Vendor Growth</h1>
            </div>
            <div className="relative w-full md:w-32">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md flex justify-between items-center bg-white transition"
              >
                <span className="text-[#0b7bb3]">{selectedYear}</span>
                <FaChevronDown className="text-[#0b7bb3] w-5 h-5 ml-5" />
              </button>

              {/* Dropdown List */}
              {isOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg text-lg">
                  {years.map((year) => (
                    <div
                      key={year}
                      onClick={() => handleSelect(year)}
                      className={`p-2 cursor-pointer hover:bg-gray-100 transition ${
                        year === selectedYear ? "bg-gray-200" : ""
                      }`}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <VendorGrowth />
        </div>
      </div>
      <div className="mt-5">
        <div className="w-full p-5 bg-[#F9B038] rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row md:justify-between lg:justify-between items-center gap-5 my-5">
            <div>
              <h1 className="text-xl font-semibold">Total RV View</h1>
            </div>

            <div className="relative w-full md:w-32">
              {/* Selected Year Display */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md flex justify-between items-center bg-white transition"
              >
                <span className="text-[#0b7bb3]">{selectedYear}</span>
                <FaChevronDown className="text-[#0b7bb3] w-5 h-5 ml-5" />
              </button>

              {/* Dropdown List */}
              {isOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
                  {years.map((year) => (
                    <div
                      key={year}
                      onClick={() => handleSelect(year)}
                      className={`p-2 cursor-pointer hover:bg-gray-100 transition ${
                        year === selectedYear ? "bg-gray-200" : ""
                      }`}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <TotalRVView />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
