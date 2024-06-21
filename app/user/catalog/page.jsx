import CatalogFilter from "@/components/user/catalog/CatalogFilter";
import Catalog from "@/components/user/catalog/Catalog";
import Beer from "@/models/Beer";
import SubInfo from "@/components/user/catalog/SubInfo";
import connectDB from "@/lib/connectDB";
export default function CatalogPage() {
  const fetchBeers = async () => {
    "use server";
    await connectDB();
    const beers = await Beer.find({});
    return JSON.stringify(beers);
  };

  return (
    <>
      <main className="p-4  mx-[5vw]">
        <section className="headerSection grid grid-cols-5">
          <div className="col-span-4">
            <h1 className="text-2xl font-bold">
              Welcome to your craft beer section!
            </h1>
            <p className="text-xl">
              Discover a curated collection of the finest craft beers from{" "}
              <br />
              Panama, select your favorites.
            </p>
          </div>
          <div className="">
            {" "}
            <SubInfo></SubInfo>
          </div>
        </section>
        <section className="mainSection grid grid-cols-5 my-4 gap-2">
          <aside className="col-span-1 border-2 border-primary rounded-md bg-primary p-1 ">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#ffffff"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <p className="text-black font-bold mt-2">Filter by:</p>
            <CatalogFilter></CatalogFilter>
          </aside>
          <Catalog fetchBeers={fetchBeers}></Catalog>
        </section>
      </main>
    </>
  );
}
