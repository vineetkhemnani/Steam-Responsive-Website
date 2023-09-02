import SearchBar from './components/SearchBar'
import Navbar from './components/Navbar'
import Recommended from './components/Recommended'
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
      <div className="lg:max-w-[90vw] xl:max-w-[80vw] mx-auto">
        {/* Recommended */}
        <Recommended />
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
