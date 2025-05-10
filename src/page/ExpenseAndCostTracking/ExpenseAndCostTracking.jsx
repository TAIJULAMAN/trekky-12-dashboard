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
    <div className="bg-[#f5f6fa] w-full overflow-y-auto">
      <header className="my-6">
        <PageHeading title="Expense & Cost Tracking" />
      </header>
      <div className="max-w-7xl mx-auto p-4">
        <div className="space-y-4">
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
    <div className="bg-white rounded-md border border-gray-200 p-4 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 whitespace-nowrap">
      <div className="flex justify-start items-center gap-3 whitespace-nowrap">
        <div className="h-14 w-14 rounded-full overflow-hidden">
          <img
            src={expense.user.avatar}
            alt={expense.user.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="font-medium">{expense.user.name}</p>
          <p className="text-sm text-muted-foreground">{expense.user.email}</p>
        </div>
      </div>
      <div className="mt-3 md:mt-0 md:ml-[52px] text-center md:text-left">
        <p className="text-sm">
          Your total maintenance cost for this RV in {expense.date} was $
          {expense.totalCost.toFixed(2)}.
        </p>
        <p className="text-sm">
          Top expenses for this RV in {expense.date} were $
          {expense.topExpenses.toFixed(2)}.
        </p>
      </div>
      <Link to="/details">
        <div className="bg-[#0891b2] hover:bg-[#0891b2]/90 text-white py-2 px-4 rounded-md flex items-center gap-2">
          <FaEye />
        </div>
      </Link>
    </div>
  );
}
