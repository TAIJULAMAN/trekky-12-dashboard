import { FaEye } from "react-icons/fa";
import PageHeading from "../../shared/PageHeading";

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
  ];

  return (
    <div className="bg-[#f5f6fa] h-full w-full h-screen">
      <header className="my-6">
        <PageHeading title=" Expense & Cost Tracking" />
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
    <div className="bg-white rounded-md border border-gray-200 p-4 shadow-sm flex justify-around items-center gap-4 whitespace-nowrap">
      <div className="flex justify-start items-center gap-3 whitespace-nowrap">
        {/* Avatar using img tag */}
        <div className="h-14 w-14 rounded-full overflow-hidden">
          <img
            src={expense.user.avatar}
            alt={expense.user.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className=" whitespace-nowrap">
          <p className="font-medium">{expense.user.name}</p>
          <p className="text-sm text-muted-foreground">{expense.user.email}</p>
        </div>
      </div>
      <div className="mt-3 ml-[52px]">
        <p className="text-sm">
          Your total maintenance cost for this RV in {expense.date} was $
          {expense.totalCost.toFixed(2)}.
        </p>
        <p className="text-sm">
          Top expenses for this RV in {expense.date} were $
          {expense.topExpenses.toFixed(2)}.
        </p>
      </div>
      <div>
        <button className="bg-[#0891b2] hover:bg-[#0891b2]/90 text-white py-2 px-4 rounded-md flex items-center gap-2">
          <FaEye /> View
        </button>
      </div>
    </div>
  );
}
