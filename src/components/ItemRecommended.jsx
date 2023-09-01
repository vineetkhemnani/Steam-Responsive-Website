import { TbApps } from 'react-icons/tb'
const ItemRecommended = ({ src, name }) => {
  return (
    <div>
      <div className="h-full md:h-[24rem] w-full flex flex-col  md:flex-row pt-3">
        <div className="w-full md:w-[62%] h-full bg-red-400 flex ">
          <img src={src} alt="" className="object-cover w-full" />
        </div>
        <div className="bg-[#0f1922] h-full w-full md:w-[38%] flex  flex-col justify-between ">
          <div className="  flex flex-col  items-start">
            <p className="text-[25px] mt-3 ml-5">{name}</p>
            <div className="px-4 w-full h-[24rem] md:h-[15rem] pt-3">
              <div className="h-[35%] w-full flex pb-1 ">
                <img src={src} alt="" className="object-cover w-[50%] pr-1 " />
                <img src={src} alt="" className="object-cover w-[50%] pl-1" />
              </div>
              <div className="h-[35%] w-full flex pt-1 ">
                <img src={src} alt="" className="object-cover w-[50%] pr-1" />
                <img src={src} alt="" className="object-cover w-[50%] pl-1" />
              </div>
              <div className=" flex flex-col items-center md:items-start  ">
                <p className="text-[22px] pt-4">Play Now</p>
                <div className="bg-gray-600 w-[6rem] rounded-[0.2rem] mt-1">
                  <p className="text-[15px] text-center">Top Seller</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-between pr-4 gap-4 md:gap-0 -mt-4 md:mt-0 pb-2 md:pb-0">
            <div className="pl-4 pb-2 ">
              <p className="text-[20px] md:text-[12px]">29.99$</p>
            </div>
            <TbApps className="text-[25px] md:text-[19px] mb-[10px]" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemRecommended
