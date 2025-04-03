import React from "react";
const Header = ({ onSearch }) => {
  const [search, setSearch] = React.useState("");
  return (
    <div class="p-4 bg-dark d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <h1 class="text-danger text-uppercase fw-bold fs-1 me-4">movie</h1>
        <nav class="d-flex align-items-center">
          <a href="#" class="text-light text-decoration-none mx-3">
            Home
          </a>
          <a href="#" class="text-light text-decoration-none mx-3">
            About
          </a>
          <a href="#" class="text-light text-decoration-none mx-3">
            Contact
          </a>
        </nav>
      </div>
      <div class="d-flex align-items-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search"
          class="form-control px-2 text-dark border-0"
        />
        <button class="btn btn-danger mx-2" onClick={() => onSearch(search)}>
          Search
        </button>
      </div>
    </div>
  );
};
export default Header;
