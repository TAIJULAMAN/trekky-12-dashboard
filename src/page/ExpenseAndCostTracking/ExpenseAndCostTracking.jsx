/* eslint-disable react/prop-types */
import { FaEye } from "react-icons/fa";
import PageHeading from "../../shared/PageHeading";
import { Link } from "react-router-dom";

export default function ExpenseAndCostTracking() {
  const expenses = [
    {
      id: 1,
      user: {
        name: "Jon Smith",
        email: "jon@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/42",
      },
      totalCost: 430.5,
      topExpenses: 420.5,
      date: "April 2025",
    },
    {
      id: 2,
      user: {
        name: "Jon Smith",
        email: "jon@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/41",
      },
      totalCost: 430.5,
      topExpenses: 420.5,
      date: "April 2025",
    },
    {
      id: 3,
      user: {
        name: "Jon Smith",
        email: "jon@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/43",
      },
      totalCost: 430.5,
      topExpenses: 420.5,
      date: "April 2025",
    },
    {
      id: 4,
      user: {
        name: "Alice Johnson",
        email: "alice@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/44",
      },
      totalCost: 320.7,
      topExpenses: 300.2,
      date: "April 2025",
    },
    {
      id: 5,
      user: {
        name: "Bob Lee",
        email: "bob@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/45",
      },
      totalCost: 510.3,
      topExpenses: 490.0,
      date: "April 2025",
    },
    {
      id: 6,
      user: {
        name: "Sara Connor",
        email: "sara@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/46",
      },
      totalCost: 280.9,
      topExpenses: 270.0,
      date: "April 2025",
    },
    {
      id: 7,
      user: {
        name: "Mike Ross",
        email: "mike@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/47",
      },
      totalCost: 600.0,
      topExpenses: 580.5,
      date: "April 2025",
    },
    {
      id: 8,
      user: {
        name: "Rachel Green",
        email: "rachel@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/48",
      },
      totalCost: 390.4,
      topExpenses: 370.3,
      date: "April 2025",
    },
    {
      id: 9,
      user: {
        name: "Joey Tribbiani",
        email: "joey@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/49",
      },
      totalCost: 450.6,
      topExpenses: 445.0,
      date: "April 2025",
    },
    {
      id: 10,
      user: {
        name: "Chandler Bing",
        email: "chandler@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/50",
      },
      totalCost: 700.8,
      topExpenses: 680.1,
      date: "April 2025",
    },
    {
      id: 11,
      user: {
        name: "Monica Geller",
        email: "monica@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/51",
      },
      totalCost: 315.6,
      topExpenses: 310.0,
      date: "April 2025",
    },
    {
      id: 12,
      user: {
        name: "Ross Geller",
        email: "ross@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/52",
      },
      totalCost: 490.2,
      topExpenses: 470.0,
      date: "April 2025",
    },
    {
      id: 13,
      user: {
        name: "Phoebe Buffay",
        email: "phoebe@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/53",
      },
      totalCost: 260.5,
      topExpenses: 250.3,
      date: "April 2025",
    },
    {
      id: 14,
      user: {
        name: "Jon Smith",
        email: "jon@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/54",
      },
      totalCost: 330.0,
      topExpenses: 310.0,
      date: "April 2025",
    },
    {
      id: 15,
      user: {
        name: "Jon Smith",
        email: "jon@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/55",
      },
      totalCost: 275.4,
      topExpenses: 265.1,
      date: "April 2025",
    },
    {
      id: 16,
      user: {
        name: "Alice Johnson",
        email: "alice@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/56",
      },
      totalCost: 410.5,
      topExpenses: 400.0,
      date: "April 2025",
    },
    {
      id: 17,
      user: {
        name: "Bob Lee",
        email: "bob@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/57",
      },
      totalCost: 305.3,
      topExpenses: 295.0,
      date: "April 2025",
    },
    {
      id: 18,
      user: {
        name: "Mike Ross",
        email: "mike@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/58",
      },
      totalCost: 690.0,
      topExpenses: 680.0,
      date: "April 2025",
    },
    {
      id: 19,
      user: {
        name: "Sara Connor",
        email: "sara@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/59",
      },
      totalCost: 260.9,
      topExpenses: 250.8,
      date: "April 2025",
    },
    {
      id: 20,
      user: {
        name: "Jon Smith",
        email: "jon@gmail.com",
        avatar: "https://avatar.iran.liara.run/public/60",
      },
      totalCost: 340.7,
      topExpenses: 330.6,
      date: "April 2025",
    },
  ];

  return (
    <div className="px-5">
      {/* Header Section */}
      <div className="mb-6">
        <PageHeading title="Expense & Cost Tracking" />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {expenses.map((expense) => (
            <ExpenseCard key={expense.id} expense={expense} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExpenseCard({ expense }) {
  return (
    <div className="bg-gradient-to-br from-[#F9B038] to-[#F9B038]/90 rounded-xl border border-orange-200 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col gap-4">
      {/* User Info Section */}
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden ring-2 ring-white/20">
          <img
            src={expense.user.avatar}
            alt={expense.user.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">
            {expense.user.name}
          </p>
          <p className="text-xs sm:text-sm text-gray-700 truncate">
            {expense.user.email}
          </p>
        </div>
      </div>

      {/* Expense Details Section */}
      <div className="space-y-2">
        <div className="bg-white/20 rounded-lg p-3">
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
            <span className="font-medium">Total maintenance cost</span> for this RV in{" "}
            <span className="font-semibold">{expense.date}</span> was{" "}
            <span className="font-bold text-gray-900">
              ${expense.totalCost.toFixed(2)}
            </span>
          </p>
        </div>
        
        <div className="bg-white/20 rounded-lg p-3">
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
            <span className="font-medium">Top expenses</span> for this RV in{" "}
            <span className="font-semibold">{expense.date}</span> were{" "}
            <span className="font-bold text-gray-900">
              ${expense.topExpenses.toFixed(2)}
            </span>
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-end mt-2">
        <Link to="/details">
          <button className="bg-[#484848] hover:bg-[#484848]/90 text-white py-2 px-4 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors duration-200 shadow-sm">
            <FaEye className="w-4 h-4" />
            <span className="hidden sm:inline">View Details</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
