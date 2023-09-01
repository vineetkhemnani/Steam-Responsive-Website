import gaming from '../assets/gaming.jpg'
import Card from './Card'
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import Carousel from 'better-react-carousel';
const SpecialOffer = () => {
  const cards = [
    { wallpaper: one, title: 'Gaming room' },
    { wallpaper: two, title: 'Gaming room' },
    { wallpaper: one, title: 'Gaming room' },
    { wallpaper: two, title: 'Gaming room' },
    { wallpaper: one, title: 'Gaming room' },
    { wallpaper: two, title: 'Gaming room' },
    { wallpaper: one, title: 'Gaming room' },
    { wallpaper: two, title: 'Gaming room' },
    { wallpaper: one, title: 'Gaming room' },
    { wallpaper: two, title: 'Gaming room' },
  ]
  return (
    <div className="mx-[2rem]  ">
      <p className="text-white pt-6">Games on Discount</p>

      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-3">
        {cards.map((card) => (
          <Card wallpaper={card.wallpaper} title={card.title} />
        ))}
      </div> */}
      <Carousel
        cols={3}
        rows={1}
        gap={10}
        loop={true}
        responsiveLayout={[
          { breakpoint: 800, cols: 1, rows: 3, gap: 10, loop: true },
        ]}
      >
        {cards.map((card) => (
          <Carousel.Item>
            <Card wallpaper={card.wallpaper} title={card.title} />
            {/* <img width="100%" src="https://picsum.photos/800/600?random=1" /> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default SpecialOffer
