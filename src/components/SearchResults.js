import InfoCard from "./InfoCard";

function SearchResults({
  location,
  checkInDate,
  checkOutDate,
  noOfGuests,
  searchData,
}) {
  const floatingButton = (text) => (
    <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-90 active:bg-gray-50 transition-transform duration-200 select-none">
      {text}
    </p>
  );

  return (
    <section className="flex-1 lg:min-w-[850px]">
      <p className="text-sm text-gray-500/80">
        {searchData.totalCount}+ stays ‒ {checkInDate} to {checkOutDate} ‒ {noOfGuests} guest
      </p>
      <h1 className="mt-3 mb-6 text-3xl font-semibold">
        Stays in <span className="capitalize">{location}</span>
      </h1>
      <div className="hidden md:flex space-x-3 text-gray-600 whitespace-nowrap">
        {floatingButton("Cancellation Flexibility")}
        {floatingButton("Type of Place")}
        {floatingButton("Price")}
        {floatingButton("Rooms & Beds")}
        {floatingButton("More Filters")}
      </div>

      <div className="mt-4 sm:mt-8 flex flex-col">
        {searchData?.results.map((info) => (
          <InfoCard key={info.id} info={info} />
        ))}
      </div>
    </section>
  );
}

export default SearchResults;
