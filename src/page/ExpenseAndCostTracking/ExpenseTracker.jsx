import PageHeading from "../../shared/PageHeading";
import ExpenseDetails from "./ExpenseDetails";

export default function ExpenseTracker() {
  const expenseData = {
    date: "20-01-2023",
    vendor: "jet swift",
    category: "Finance",
    cost: 76000.3,
    qty: 1,
    mileage: 26.3,
  };

  return (
    <div className="p-4">
      <PageHeading title=" Expense & Cost Tracking" />
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-4 shadow-md">
          {/* Budget Planner Image */}
          <div className="relative h-[500px] w-full">
            <img
              src="/placeholder.svg"
              alt="Budget Planner"
              className="h-full w-full object-contain border border-gray-200 p-2 bg-gray-50"
            />
            {/* Yellow header bar overlay */}
            <div className="absolute left-2 right-2 top-2 flex items-center justify-between bg-yellow-100 p-2">
              <span className="font-bold">Budget Planner</span>
              <span className="rounded-full border border-black px-2 py-0.5 text-xs">
                Monthly
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-md">
          <ExpenseDetails expense={expenseData} />
        </div>
      </div>
    </div>
  );
}
