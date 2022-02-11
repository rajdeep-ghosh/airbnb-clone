import { useRouter } from "next/router";
import axios from "../api/axios";
import { format, formatISO, parseISO } from "date-fns";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Search({ searchData }) {
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

      <main className="mt-32 mx-5 sm:mx-8 lg:ml-8 lg:mr-0 flex space-x-4 font-Nunito-Sans antialiased selection:bg-airbnb_red selection:text-white">
        <SearchResults
          location={location}
          noOfGuests={noOfGuests}
          checkInDate={formattedCheckInDate}
          checkOutDate={formattedCheckoutDate}
          searchData={searchData}
        />
        <Map searchData={searchData.results} />
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { location, checkInDate, checkOutDate, noOfGuests } = context.query;
  const checkin = formatISO(new Date(checkInDate), { representation: "date" });
  const checkout = formatISO(new Date(checkOutDate), {representation: "date",});

  // Get Destination ID of location
  const destinationId = await axios
    .get("/destinations/search", {
      params: {
        query: location,
        currency: "INR",
        locale: "en_IN",
      },
    })
    .then((res) => res.data.suggestions[0].entities[0].destinationId)
    .catch((err) => console.error(err));

  // Get Hotels from Destination ID
  const hotels = await axios
    .get("/hotels/search", {
      params: {
        checkin_date: checkin,
        checkout_date: checkout,
        sort_order: "BEST_SELLER",
        destination_id: destinationId,
        adults_number: noOfGuests,
        locale: "en_IN",
        currency: "INR",
        page_number: "1",
      },
    })
    .then((res) => JSON.parse(JSON.stringify(res.data.searchResults)))
    .catch((err) => console.error(err));

  return {
    props: {
      searchData: hotels,
    },
  };
}
