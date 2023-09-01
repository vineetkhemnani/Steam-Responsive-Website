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
        responsiveLayout={[
          { breakpoint: 800, cols: 1, rows: 3, gap: 10, loop: true },
        ]}
      >
        {items.map((item) => (
          <Carousel.Item>
            <ItemRecommended src={item.srcA} name={item.name} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Recommended
