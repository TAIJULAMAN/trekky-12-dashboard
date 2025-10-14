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

const TotalRVView = ({ year }) => {
  const [chartHeight, setChartHeight] = useState(300);
  const { data } = useGetAllDashboardQuery(year, { refetchOnMountOrArgChange: true });

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
    const analytics = data?.data?.analytics;
    const obj = analytics?.monthlyRvGrowth;

    if (obj && typeof obj === "object") {
      const fullMonthOrder = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return monthLabels.map((label, idx) => ({
        month: label,
        vendors: Number(obj[fullMonthOrder[idx]] ?? 0),
      }));
    }

    // Fallback to any array shape if provided
    const arr = Array.isArray(analytics?.monthlyRvGrowth)
      ? analytics?.monthlyRvGrowth
      : undefined;
    if (Array.isArray(arr)) {
      return monthLabels.map((m, i) => ({ month: m, vendors: Number(arr[i] ?? 0) }));
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
        <AreaChart data={series} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="vendorGrowth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3a3a3a" stopOpacity={1} />
              <stop offset="95%" stopColor="#3a3a3a" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            tick={{ fill: "#3a3a3a" }}
            tickLine={{ stroke: "#3a3a3a" }}
          />
          <YAxis tick={{ fill: "#3a3a3a" }} tickLine={{ stroke: "#3a3a3a" }} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="vendors"
            stroke="#3a3a3a"
            // strokeWidth={3}
            fill="url(#vendorGrowth)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalRVView;
