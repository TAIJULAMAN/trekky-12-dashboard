import { useState } from "react";
import { DownOutlined, TeamOutlined, CarOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import UsersGrowth from "./UsersGrowth";
import TotalRVView from "./TotalRVView";
import { useGetAllDashboardQuery } from "../../Redux/api/dashboard/dashboardApi";

function DashboardPage() {
  const currentYear = dayjs().year();
  const startYear = 2024;
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedYearUsers, setSelectedYearUsers] = useState(currentYear);
  const [selectedYearRv, setSelectedYearRv] = useState(currentYear);

  const [isOpenUsers, setIsOpenUsers] = useState(false);
  const [isOpenRv, setIsOpenRv] = useState(false);

  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const handleSelectUsers = (year) => {
    setSelectedYearUsers(year);
    setIsOpenUsers(false);
  };
  const handleSelectRv = (year) => {
    setSelectedYearRv(year);
    setIsOpenRv(false);
  };

  const { data: dashboardData } = useGetAllDashboardQuery(selectedYear);
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-between items-center gap-5 p-6 rounded-lg border border-[#e19b31] bg-[#faaf37] text-[#07163D]">
          <div className="rounded-full bg-white p-3">
            <TeamOutlined
              className="text-[#07163D] text-[40px]"
              aria-hidden="true"
            />
          </div>
          <div>
            <h2 className="text-[#07163D] text-lg font-semibold">
              Total Users
            </h2>
            <p className="text-[#07163D] text-3xl font-semibold tracking-tight">
              {dashboardData?.data?.analytics?.totalUsers}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center gap-5 p-6 rounded-lg border border-[#e19b31] bg-[#faaf37] text-[#07163D]">
          <div className="rounded-full bg-white p-3">
            <CarOutlined
              className="text-[#07163D] text-[40px]"
              aria-hidden="true"
            />
          </div>
          <div>
            <h2 className="text-[#07163D] text-lg font-semibold">Total RV</h2>
            <p className="text-[#07163D] text-3xl font-semibold tracking-tight">
              {dashboardData?.data?.analytics?.totalRvAddingGrowth}
            </p>
          </div>
        </div>
      </div>
      {/* .............. */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <div className="w-full p-5 bg-[#faaf37] border border-[#e19b31] text-[#07163D] rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between lg:justify-between items-center gap-5 my-5">
            <div>
              <h1 className="text-[#07163D] text-lg font-bold">Users Growth</h1>
            </div>

            <div className="relative w-full md:w-32">
              {/* Selected Year Display */}
              <button
                onClick={() => setIsOpenUsers(!isOpenUsers)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md flex justify-between items-center bg-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b7bb3] focus-visible:ring-offset-2"
                aria-haspopup="listbox"
                aria-expanded={isOpenUsers}
                aria-controls="years-list-users"
                aria-label="Select year for Users Growth"
              >
                <span className="text-[#0b7bb3]">{selectedYearUsers}</span>
                <DownOutlined
                  className="text-[#0b7bb3] text-[20px] ml-5"
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown List */}
              {isOpenUsers && (
                <div
                  id="years-list-users"
                  role="listbox"
                  className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg"
                >
                  {years.map((year) => (
                    <div
                      key={year}
                      onClick={() => handleSelectUsers(year)}
                      role="option"
                      aria-selected={year === selectedYearUsers}
                      className={`p-2 cursor-pointer hover:bg-gray-100 transition ${
                        year === selectedYearUsers ? "bg-gray-200" : ""
                      }`}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <UsersGrowth year={selectedYearUsers} />
        </div>
        <div className="w-full p-5 bg-[#faaf37] border border-[#e19b31] text-[#07163D] rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between lg:justify-between items-center gap-5 my-5">
            <div>
              <h1 className="text-[#07163D] text-lg font-bold">RV Growth</h1>
            </div>

            <div className="relative w-full md:w-32">
              {/* Selected Year Display */}
              <button
                onClick={() => setIsOpenRv(!isOpenRv)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md flex justify-between items-center bg-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b7bb3] focus-visible:ring-offset-2"
                aria-haspopup="listbox"
                aria-expanded={isOpenRv}
                aria-controls="years-list-rv"
                aria-label="Select year for Total RV View"
              >
                <span className="text-[#0b7bb3]">{selectedYearRv}</span>
                <DownOutlined
                  className="text-[#0b7bb3] text-[20px] ml-5"
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown List */}
              {isOpenRv && (
                <div
                  id="years-list-rv"
                  role="listbox"
                  className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg"
                >
                  {years.map((year) => (
                    <div
                      key={year}
                      onClick={() => handleSelectRv(year)}
                      role="option"
                      aria-selected={year === selectedYearRv}
                      className={`p-2 cursor-pointer hover:bg-gray-100 transition ${
                        year === selectedYearRv ? "bg-gray-200" : ""
                      }`}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <TotalRVView year={selectedYearRv} />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
