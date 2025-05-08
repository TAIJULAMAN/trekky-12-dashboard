import { FaChevronDown } from "react-icons/fa";

export default function BudgetPlanner({ onSelectExpense }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Budget Planner</h2>
        <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 text-sm">
          <span>Monthly</span>
          <FaChevronDown className="h-4 w-4 ml-1" />
        </div>
      </div>

      {/* Expenses Tab */}
      <div className="mb-4">
        <div className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-t-md flex justify-between items-center">
          <span>Expenses</span>
          <FaChevronDown className="h-4 w-4" />
        </div>
        <div className="border border-gray-300 rounded-b-md bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-2">Category</th>
                <th className="text-right p-2">Planned</th>
                <th className="text-left p-2">Description</th>
                <th className="text-right p-2">Actual</th>
              </tr>
            </thead>
            <tbody>
              <tr
                className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                onClick={() => onSelectExpense({ type: "Housing", cost: 1200 })}
              >
                <td className="p-2">Housing</td>
                <td className="text-right p-2">$1200.00</td>
                <td className="p-2">Rent</td>
                <td className="text-right p-2">$1200.00</td>
              </tr>
              <tr
                className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                onClick={() => onSelectExpense({ type: "Food", cost: 500 })}
              >
                <td className="p-2">Food</td>
                <td className="text-right p-2">$500.00</td>
                <td className="p-2">Groceries</td>
                <td className="text-right p-2">$520.00</td>
              </tr>
              <tr
                className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                onClick={() => onSelectExpense({ type: "Transportation", cost: 350 })}
              >
                <td className="p-2">Transportation</td>
                <td className="text-right p-2">$350.00</td>
                <td className="p-2">Gas</td>
                <td className="text-right p-2">$380.00</td>
              </tr>
              <tr
                className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                onClick={() => onSelectExpense({ type: "Health", cost: 200 })}
              >
                <td className="p-2">Health</td>
                <td className="text-right p-2">$200.00</td>
                <td className="p-2">Insurance</td>
                <td className="text-right p-2">$200.00</td>
              </tr>
              <tr
                className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                onClick={() => onSelectExpense({ type: "Entertainment", cost: 150 })}
              >
                <td className="p-2">Entertainment</td>
                <td className="text-right p-2">$150.00</td>
                <td className="p-2">Movies</td>
                <td className="text-right p-2">$180.00</td>
              </tr>
              <tr
                className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                onClick={() => onSelectExpense({ type: "Subscriptions", cost: 50 })}
              >
                <td className="p-2">Subscriptions</td>
                <td className="text-right p-2">$50.00</td>
                <td className="p-2">Netflix</td>
                <td className="text-right p-2">$50.00</td>
              </tr>
              <tr
                className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                onClick={() =>
                  onSelectExpense({
                    type: "Fuel",
                    cost: 25005.2,
                    qty: 2,
                    mileage: 25000,
                    date: "20-20-2025",
                    vendor: "Jon smith",
                    city: "France",
                  })
                }
              >
                <td className="p-2">Fuel</td>
                <td className="text-right p-2">$200.00</td>
                <td className="p-2">Car</td>
                <td className="text-right p-2">$25,005.20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Income Tab */}
      <div className="mb-4">
        <div className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-t-md flex justify-between items-center">
          <span>Income</span>
          <FaChevronDown className="h-4 w-4" />
        </div>
        <div className="border border-gray-300 rounded-b-md bg-white">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-2">Salary</td>
                <td className="text-right p-2">$4000.00</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2">Side Hustle</td>
                <td className="text-right p-2">$500.00</td>
              </tr>
              <tr>
                <td className="p-2">Total Income</td>
                <td className="text-right p-2 font-bold">$4500.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Tab */}
      <div>
        <div className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-t-md flex justify-between items-center">
          <span>Summary</span>
          <FaChevronDown className="h-4 w-4" />
        </div>
        <div className="border border-gray-300 rounded-b-md bg-white">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-2">Total Income</td>
                <td className="text-right p-2">$4500.00</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2">Total Expenses</td>
                <td className="text-right p-2">$27,535.20</td>
              </tr>
              <tr>
                <td className="p-2">Balance</td>
                <td className="text-right p-2 font-bold text-red-500">-$23,035.20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
