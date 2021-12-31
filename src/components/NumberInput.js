function NumberInput({ name, value, setValue }) {
  return (
    <div className="flex justify-between sm:justify-start sm:space-x-6 items-center">
      <label htmlFor={name}>{name}:</label>
      <span className="p-2 rounded-full bg-gray-50">
        <button
          disabled={value <= 0}
          onClick={() => !(value <= 0) && setValue((val) => val - 1)}
          className="py-2 px-4 bg-[#efeff5] rounded-full hover:outline outline-1 outline-gray-800 disabled:bg-gray-100 disabled:hover:outline-none"
        >
          -
        </button>
        <input
          className="w-16 p-1 text-center outline-none bg-transparent"
          type="number"
          min={0}
          max={20}
          value={value}
          readOnly
        />
        <button
          disabled={value >= 20}
          onClick={() => !(value >= 20) && setValue((val) => val + 1)}
          className="py-2 px-4 bg-[#efeff5] rounded-full hover:outline outline-1 outline-gray-800 disabled:bg-gray-100 disabled:hover:outline-none"
        >
          +
        </button>
      </span>
    </div>
  );
}

export default NumberInput;
