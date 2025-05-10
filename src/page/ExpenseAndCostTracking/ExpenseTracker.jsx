import PageHeading from "../../shared/PageHeading";
import ExpenseDetails from "./ExpenseDetails";
import memo from "../../assets/memo.png";

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
              src={memo}
              alt="Budget Planner"
              className="h-full w-full object-contain border border-gray-200 p-2 bg-gray-50"
            />
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-md">
          <ExpenseDetails expense={expenseData} />
        </div>
      </div>
    </div>
  );
}
