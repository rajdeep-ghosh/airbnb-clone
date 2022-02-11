import { useRouter } from "next/router";
import axios from "axios";
import { format, parseISO } from "date-fns";
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
        <Map searchData={searchData} />
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { location } = context.query;

  // Get Destination ID of location
  const destinationIdOptions = {
    method: "GET",
    url: "https://hotels-com-provider.p.rapidapi.com/v1/destinations/search",
    params: {
      query: location,
      currency: "INR",
      locale: "en_IN",
    },
    headers: {
      "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    },
  };

  const destinationId = await axios
    .request(destinationIdOptions)
    .then((response) => response.data.suggestions[0].entities[0].destinationId)
    .catch((error) => console.error(error));

  const searchData = await fetch("https://jsonkeeper.com/b/5NPS").then((res) =>
    res.json()
  );

  return {
    props: {
      searchData: searchData,
    },
  };
}
