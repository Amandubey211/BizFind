// src/components/SearchBar.jsx
const SearchBar = () => {
  return (
    <div className="hero min-h-[40vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Find Your Next Favorite Spot</h1>
          <p className="py-6">
            Discover the best local businesses, from cozy cafes to innovative
            tech hubs, all in one place.
          </p>
          <div className="form-control flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="input input-bordered w-full"
            />
            <select className="select select-bordered w-full sm:w-auto">
              <option disabled selected>
                Category
              </option>
              <option>Technology</option>
              <option>Food & Beverage</option>
              <option>Health & Wellness</option>
              <option>Retail</option>
            </select>
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
