import SearchBar from './components/SearchBar'
import Navbar from './components/Navbar'
import Recomended from './components/Recommended'
import SpecialOffer from './components/SpecialOffers'
import Browse from './components/Browse'
import Footer from './components/Footer'
import VideoComponent from './components/VideoComponent'

function App() {
  return (
    <div className="bg-[#1b2838]">
      {/* Navbar */}
      <Navbar />
      <VideoComponent />
      <div className="mx-auto">
        {/* Recommended */}
        <Recomended />
        {/* SpecialOffers */}
        <SpecialOffer />
        {/* Browse */}
        <Browse />
      </div>{' '}
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
