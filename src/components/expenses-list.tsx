export default function ExpensesList() {
  const expense = [
    {
      id: 1,
      description: "Groceries",
      amount: 105.87,
    },
  ];

  return (
    <ul className="h-[300px] bg-white rounded mt-4 shadow-md">
      {expense.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center px-4 py-2 border-b "
        >
          <p>{item.description}</p>
          <p className="ml-auto font-bold mr-[15px]">${item.amount}</p>
          <button className="text-[10px] w-[20px] h-[20px] bg-red-500 text-white rounded hover:bg-red-600">
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
