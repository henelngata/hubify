import { SearchBar } from "../messages/ui/components";
import { SearchCard } from "./ui/components";

export default function () {
  return (
    <main>
      <section >
        <SearchBar />
      </section>
      <section className="border width-60vh">
        {/* the search cards */}
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </section>
    </main>
  );
}
