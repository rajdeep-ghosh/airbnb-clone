import { useMediaQuery } from "@react-hook/media-query";
import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import NumberInput from "./NumberInput";

function DatePicker({
  checkInDate,
  checkOutDate,
  noOfAdults,
  noOfChildren,
  close,
}) {
  const isSmallScreen = useMediaQuery("(max-width: 36rem)");

  const selectionRange = {
    startDate: checkInDate.value,
    endDate: checkOutDate.value,
    key: "selection",
  };

  function handleSelect(ranges) {
    checkInDate.setValue(ranges.selection.startDate);
    checkOutDate.setValue(ranges.selection.endDate);
  }

  const options = {
    ranges: [selectionRange],
    minDate: new Date(),
    onChange: handleSelect,
    rangeColors: ["#ff5a5f"],
  };

  return (
    <div className="absolute top-20 p-2 bg-white text-gray-700 rounded-xl drop-shadow-2xl selection:bg-airbnb_red selection:text-gray-100">
      <h4 className="p-4 text-lg font-bold">Pick Check-in & Check-out dates</h4>
      {isSmallScreen ? (
        <DateRange {...options} />
      ) : (
        <DateRangePicker {...options} />
      )}
      <div className="p-4">
        <h4 className="text-lg font-bold">Add Guests</h4>
        <div className="flex flex-col sm:flex-row justify-between my-4">
          <NumberInput
            name="Adults"
            value={noOfAdults.value}
            setValue={noOfAdults.setValue}
          />
          <NumberInput
            name="Children"
            value={noOfChildren.value}
            setValue={noOfChildren.setValue}
          />
        </div>
        <div className="text-center">
          <button
            className="py-2 px-4 text-sm rounded-full hover:scale-95 transition hover:outline outline-1 bg-rose-400/20 text-rose-600 outline-rose-600"
            onClick={() => close(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
