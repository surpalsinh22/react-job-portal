export default function CategoryBar({ categories, filterBy }) {
  return (
    <div className="bg-white shadow p-4">

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">

        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => filterBy(cat)}
            className="text-center cursor-pointer px-3 py-2 bg-gray-100 rounded-lg 
                       hover:bg-blue-500 hover:text-white transition text-sm"
          >
            {cat}
          </div>
        ))}

      </div>

    </div>
  );
}