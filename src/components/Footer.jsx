import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className="mt-5 bg-[#171A21] py-4">
      <hr className="bg-gray-300 w-[80%] absolute left-20" />
      <div className='flex my-4'>
        <p className="ml-20 text-sm text-wrap text-white w-[60%]">
          © 2023 Valve Corporation. All rights reserved. All trademarks are
          property of their respective owners in the US and other countries. VAT
          included in all prices where applicable. Privacy Policy | Legal |
          Steam Subscriber Agreement | Refunds | Cookies
        </p>
        <img className="h-10 ml-12" src={logo} alt="" />
      </div>
      <hr className="text-gray-400 w-[80%] absolute left-20" />
    </div>
  )
}
export default Footer