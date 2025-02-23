import StoreHeader from "./_components/store-header";
import FilterIsland from "./_components/filter-island";

export default function Home() {
  return (
    <>
      <StoreHeader />
      <div className="grid grid-cols-4 grid-rows-1 gap-2">
        <FilterIsland className="flex items-center justify-center h-dvh border border-red-500" />
        <main className="col-span-3 flex items-center justify-center h-dvh border border-red-500">
          Main content of this page goes here
        </main>
      </div>
    </>
  );
}
