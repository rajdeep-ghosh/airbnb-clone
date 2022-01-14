import { useRouter } from "next/router";
import { format, parseISO } from "date-fns";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";

function Search() {
  const router = useRouter();

  const { location, checkInDate, checkOutDate, noOfGuests } = router.query;
  const formattedCheckInDate = format(parseISO(checkInDate), "dd MMM yy");
  const formattedCheckoutDate = format(parseISO(checkOutDate), "dd MMM yy");

  return (
    <>
      <Header
        page="search"
        placeholder={`${location} | ${formattedCheckInDate} ‒ ${formattedCheckoutDate} | ${noOfGuests} guest`}
      />

      <main className="mt-32 mx-6 sm:mx-14 xl:mx-40 flex">
        <SearchResults
          location={location}
          noOfGuests={noOfGuests}
          checkInDate={formattedCheckInDate}
          checkOutDate={formattedCheckoutDate}
        />
      </main>
    </>
  );
}

export default Search;
