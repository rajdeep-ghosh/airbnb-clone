import Header from "../components/Header";
import SearchResults from "../components/SearchResults";

function Search() {
  return (
    <>
      <Header page="search" />

      <main className="mt-24 flex">
        <SearchResults />
      </main>
    </>
  );
}

export default Search;
