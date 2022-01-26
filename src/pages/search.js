import { useRouter } from "next/router";
import { format, parseISO } from "date-fns";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Map from "../components/Map";
import Footer from "../components/Footer";

function Search({ searchData }) {
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

      <main className="mt-32 mx-5 sm:mx-8 lg:ml-8 lg:mr-0 flex space-x-4">
        <SearchResults
          location={location}
          noOfGuests={noOfGuests}
          checkInDate={formattedCheckInDate}
          checkOutDate={formattedCheckoutDate}
          searchData={searchData}
        />
        <Map searchData={searchData} />
      </main>

      <Footer />
    </>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchData = await fetch("https://jsonkeeper.com/b/5NPS").then((res) =>
    res.json()
  );

  return {
    props: {
      searchData: searchData,
    },
  };
}
