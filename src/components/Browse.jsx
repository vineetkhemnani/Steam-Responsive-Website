import { browseCategories } from '../constants/gameCategories.js'
import Carousel from 'better-react-carousel'
import CategoryCard from './CategoryCard.jsx'
const Browse = () => {
  return (
    <div className="mx-[2rem] mt-[2rem] text-white text-[14px] overflow-hidden">
      <p>Browse by Category</p>
      <Carousel
        cols={4}
        rows={1}
        gap={10}
        loop={true}
        responsiveLayout={[
          { breakpoint: 800, cols: 1, rows: 3, gap: 10, loop: true },
        ]}
      >
        {browseCategories.map((category) => (
          <Carousel.Item>
            <CategoryCard img={category.img} name={category.name} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
export default Browse
