import Header from "../components/Header";
import SearchResults from "../components/SearchResults";

function Search() {
  return (
    <>
      <Header page="search" />

      <main className="mt-32 mx-6 sm:mx-14 xl:mx-40 flex">
        <SearchResults />
      </main>
    </>
  );
}

export default Search;
