const SearchBar = () => {
  return (
    <div className="gradient mx-[2rem] pl-4 pr-2 mt-32 flex items-center justify-between rounded  py-[0.1rem]  ">
      <ul className="flex items-center py-1.5 text-white text-[14px] gap-10">
        <li>
          <p>Your Store</p>
        </li>
        <li>
          <p>New and Noteworthy</p>
        </li>
        <li>
          <p>Categories</p>
        </li>
        <li>
          <p>Points Shop</p>
        </li>
        <li>
          <p>News</p>
        </li>
        <li>
          <p>Labs</p>
        </li>
      </ul>

      <input
        type="search"
        placeholder="Search"
        className="pl-4 ml-24 rounded placeholder:text-black bg-[#316282]"
      />
    </div>
  )
}

export default SearchBar
