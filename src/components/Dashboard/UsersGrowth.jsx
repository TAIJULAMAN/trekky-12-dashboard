/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGetAllDashboardQuery } from "../../Redux/api/dashboard/dashboardApi";

const monthLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const UsersGrowth = ({ year }) => {
  const [chartHeight, setChartHeight] = useState(300);
  const { data } = useGetAllDashboardQuery(year);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setChartHeight(250);
      } else {
        setChartHeight(300);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const series = useMemo(() => {
    const root = data?.data || data || {};
    const analytics = root?.analytics || root;
    const candidates = [
      analytics?.monthlyUserGrowth,
      analytics?.userGrowthByMonth,
      analytics?.usersPerMonth,
      analytics?.monthlyUsers,
    ].find((arr) => Array.isArray(arr) && arr.length);

    if (Array.isArray(candidates)) {
      if (typeof candidates[0] === "number") {
        return monthLabels.map((m, i) => ({
          month: m,
          vendors: candidates[i] ?? 0,
        }));
      }
      if (typeof candidates[0] === "object") {
        return monthLabels.map((m, i) => ({
          month: m,
          vendors: candidates[i]?.value ?? candidates[i]?.count ?? 0,
        }));
      }
    }
    return monthLabels.map((m) => ({ month: m, vendors: 0 }));
  }, [data]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#202020] text-white p-3 rounded-lg shadow-lg border border-[#0b7bb3]">
          <p className="font-medium">{`Month: ${label}`}</p>
          <p className="font-medium text-[#0b7bb3]">{`Vendors: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height={chartHeight}>
        <AreaChart
          data={series}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="month"
            tick={{ fill: "#3A3A3A" }}
            tickLine={{ stroke: "#3A3A3A" }}
          />
          <YAxis tick={{ fill: "#3A3A3A" }} tickLine={{ stroke: "#3A3A3A" }} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="vendors"
            stroke="#3A3A3A"
            // strokeWidth={3}
            fill="#3A3A3A"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsersGrowth;
