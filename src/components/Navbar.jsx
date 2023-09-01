import logo from '../assets/logo.png'
import { FiMenu } from 'react-icons/fi'
import { ImDownload } from 'react-icons/im'
const Navbar = () => {
  return (
    // first
    <div className="flex items-center bg-[#171a21]">
      <div className="flex items-center justify-center lg:justify-start py-2 px-2 lg:py-6 lg:px-8 w-full lg:w-auto">
        <div className="lg:hidden left-4 absolute text-white">
          <FiMenu className="text-[30px]" />
        </div>
        <img src={logo} alt="" className="w-48 mr-2" />
      </div>

      {/* second */}
      <div className="hidden lg:flex pl-10">
        <ul className="text-[#D7D9DA] text-[15px] font-semibold flex gap-5">
          <li className=" hover:text-white cursor-pointer">
            <p>STORE</p>
          </li>
          <li className=" hover:text-white cursor-pointer">
            <p>COMMUNITY</p>
          </li>
          <li className=" hover:text-white cursor-pointer">
            <p>ABOUT</p>
          </li>
          <li className=" hover:text-white cursor-pointer">
            <p>SUPPORT</p>
          </li>
        </ul>
      </div>

      {/* third */}
      <div className="text-[12px] text-white absolute right-10 top-0 mt-2 hidden lg:flex">
        <div className="flex items-center bg-[#5c7e10] px-2 py-1 rounded-[0.2rem]">
          <ImDownload className="mr-2" />
          <p className="">Install Steam</p>
        </div>
        <div className="ml-4 mt-1">
          <p className="text-[#D7D9DA] hover:text-white">Sign in</p>
        </div>
        <div className="h-[15px] w-[1px] bg-white mx-2 mt-1"></div>
        <div>
          <p className="text-[#D7D9DA] hover:text-white mt-1">language</p>
        </div>
      </div>
    </div>
  )
}
export default Navbar
