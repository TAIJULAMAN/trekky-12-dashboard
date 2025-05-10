/* eslint-disable react/prop-types */

export default function ExpenseDetails({ expense }) {
  return (
    <div className="expense-details">
      <h2 className="mb-5 text-xl font-bold text-gray-600">
        Expense & Cost Details
      </h2>

      <div className="grid grid-cols-1 space-y-5">
        <div className="flex items-center justify-between px-5">
          <label className="block text-lg font-bold text-gray-600">Date</label>
          <p className="block text-lg font-semibold text-gray-400">
            {expense.date}
          </p>
        </div>

        <div className="flex items-center justify-between px-5">
          <label className="block text-xl font-bold text-gray-600">Type</label>
          <div className="block text-lg font-semibold text-gray-400">
            No Data
          </div>
        </div>

        <div className="flex items-center justify-between px-5">
          <label className="block text-xl font-bold text-gray-600">
            Vendor
          </label>
          <div className="block text-lg font-semibold text-gray-400">
            {expense.vendor}
          </div>
        </div>

        <div className="flex items-center justify-between px-5">
          <label className="block text-xl font-bold text-gray-600">
            Category
          </label>
          <div className="block text-lg font-semibold text-gray-400">
            {expense.category}
          </div>
        </div>

        <div className="flex items-center justify-between px-5">
          <label className="block text-xl font-bold text-gray-600">Cost</label>
          <div className="block text-lg font-semibold text-gray-400">
            $
            {expense.cost.toLocaleString("en-US", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </div>
        </div>

        <div className="flex items-center justify-between px-5">
          <label className="block text-xl font-bold text-gray-600">Qty</label>
          <div className="block text-lg font-semibold text-gray-400">
            {expense.qty}
          </div>
        </div>

        <div className="flex items-center justify-between px-5">
          <label className="block text-xl font-bold text-gray-600">
            Mileage
          </label>
          <div className="block text-lg font-semibold text-gray-400">
            {expense.mileage.toFixed(4)}
          </div>
        </div>
      </div>
    </div>
  );
}
