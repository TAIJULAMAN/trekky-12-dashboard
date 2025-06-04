/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const UsersGrowth = () => {
  const [chartHeight, setChartHeight] = useState(300);

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

  const data = [
    { month: "Jan", vendors: 0 },
    { month: "Feb", vendors: 50 },
    { month: "Mar", vendors: 65 },
    { month: "Apr", vendors: 75 },
    { month: "May", vendors: 105 },
    { month: "Jun", vendors: 95 },
    { month: "Jul", vendors: 125 },
    { month: "Aug", vendors: 85 },
    { month: "Sep", vendors: 75 },
    { month: "Oct", vendors: 60 },
    { month: "Nov", vendors: 120 },
    { month: "Dec", vendors: 100 },
  ];

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
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="vendorGrowth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3A3A3A" />
              <stop offset="95%" stopColor="#3A3A3A" />
            </linearGradient>
          </defs>
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
            strokeWidth={3}
            fill="url(#vendorGrowth)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsersGrowth;
