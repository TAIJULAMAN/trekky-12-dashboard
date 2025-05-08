import { useState } from "react";
import BudgetPlanner from "./BudgetPlanner";
import ExpenseDetails from "./ExpenseDetails";


export default function ExpenseTracker() {
  const [selectedExpense, setSelectedExpense] = useState({
    type: "Fuel",
    date: "20-20-2025",
    vendor: "Jon smith",
    city: "France",
    cost: 25005.2,
    qty: 2,
    mileage: 25000,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <BudgetPlanner onSelectExpense={setSelectedExpense} />
      </div>
      <div>
        <ExpenseDetails expense={selectedExpense} />
      </div>
    </div>
  );
}
