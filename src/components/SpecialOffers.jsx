import gaming from '../assets/gaming.jpg'
import Card from './Card'
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import Carousel from 'better-react-carousel'
const SpecialOffer = () => {
  const cards = [
    { id: 1, wallpaper: one, title: 'Gaming room' },
    { id: 2, wallpaper: two, title: 'Gaming room' },
    { id: 3, wallpaper: one, title: 'Gaming room' },
    { id: 4, wallpaper: two, title: 'Gaming room' },
    { id: 5, wallpaper: one, title: 'Gaming room' },
    { id: 6, wallpaper: two, title: 'Gaming room' },
    { id: 7, wallpaper: one, title: 'Gaming room' },
    { id: 8, wallpaper: two, title: 'Gaming room' },
    { id: 9, wallpaper: one, title: 'Gaming room' },
    { id: 10, wallpaper: two, title: 'Gaming room' },
  ]
  return (
    <div className="mx-[2rem]  ">
      <p className="text-white pt-6">Games on Discount</p>

      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-3">
        {cards.map((card) => (
          <Card wallpaper={card.wallpaper} title={card.title} />
        ))}
      </div> */}
      {/* <Carousel cols={3} rows={1} gap={10} loop={true}>
        {cards.map((card) => (
          <Carousel.Item key={card.id}>
            <Card wallpaper={card.wallpaper} title={card.title} />
           
          </Carousel.Item>
        ))}
      </Carousel> */}
      
    </div>
  )
}

export default SpecialOffer
