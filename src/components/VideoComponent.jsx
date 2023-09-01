import SearchBar from "./SearchBar"

const VideoComponent = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full flex items-center justify-center">
        
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
  
      </div>
      <video className="w-full" loop autoPlay muted>
        <source
          src="https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/033ec55896e8c90f70ca283c/webm_page_bg_english.webm?t=1693007260"
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default VideoComponent
