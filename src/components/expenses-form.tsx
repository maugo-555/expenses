export default function ExpensesForm() {
  return (
    <form className="w-full rounded mt-8 rounded overflow-hidden">
      <input
        type="text"
        name="description"
        placeholder="Descrtiption"
        className="w-full px-3 py-2 outline-none"
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        className="w-full px-3 py-2 outline-none"
      />
      <button className="w-full bg-blue-500 text-white font-bold px-2 py-2">
        Add expense
      </button>
    </form>
  );
}
