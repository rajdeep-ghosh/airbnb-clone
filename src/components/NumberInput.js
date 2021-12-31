function NumberInput({ name, value, setValue }) {
  return (
    <div className="flex justify-between sm:justify-start sm:space-x-6 items-center">
      <label htmlFor={name}>{name}:</label>
      <span className="p-2 rounded-full bg-gray-50">
        <button className="py-2 px-4 bg-[#efeff5] rounded-full hover:outline outline-1 outline-gray-800">
          -
        </button>
        <input
          className="w-16 p-1 text-center outline-none bg-transparent"
          type="number"
        />
        <button className="py-2 px-4 bg-[#efeff5] rounded-full hover:outline outline-1 outline-gray-800">
          +
        </button>
      </span>
    </div>
  );
}

export default NumberInput;
