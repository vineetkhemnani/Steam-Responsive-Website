import Carousel from 'better-react-carousel'
import gaming from '../assets/gaming.jpg'

import ItemRecommended from './ItemRecommended'

const items = [
    {srcA: gaming, name: "Starfield"},
    {srcA: gaming, name: "Starfield"},
    {srcA: gaming, name: "Starfield"},
    {srcA: gaming, name: "Starfield"},
    {srcA: gaming, name: "Starfield"},
    
]

const Recommended = () => {
  return (
    <div className="mx-[2rem] mt-[2rem] text-white text-[14px] overflow-hidden">
      {/* Title */}
      <p>FEATURED AND RECOMMENDED</p>

      {/* Featured */}
      <Carousel
        cols={1}
        rows={1}
        gap={10}
        loop={true}
        
      >
        {items.map((item,index) => (
          <Carousel.Item key={index}>
            <ItemRecommended src={item.srcA} name={item.name} key={index} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Recommended
