import { useRouter } from "next/router";

function SearchResults() {
  const router = useRouter();
  const { location, chechInDate, checkOutDate, noOfGuests } = router.query;

  const floatingButton = (text) => (
    <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-90 active:bg-gray-50 transition-transform duration-200 select-none">
      {text}
    </p>
  );

  return (
    <section className="flex-grow">
      <p className="text-sm">300+ stays for {noOfGuests} people</p>
      <h1 className="mt-3 mb-6 text-3xl font-semibold">
        Stays in <span className="capitalize">{location}</span>
      </h1>
      <div className="hidden md:inline-flex space-x-3 text-gray-600 whitespace-nowrap">
        {floatingButton("Cancellation Flexibility")}
        {floatingButton("Type of Place")}
        {floatingButton("Price")}
        {floatingButton("Rooms & Beds")}
        {floatingButton("More Filters")}
      </div>
    </section>
  );
}

export default SearchResults;
