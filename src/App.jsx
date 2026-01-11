import './App.css'
import Carousel from './Components/Carousel/Carousel'
import FeaturedProducts from './Components/FeaturedProd/Featured'

import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header'
import TopProducts from './Components/Top-Products/TopProducts'

function App() {
  
  return (
    <>
      <Header/>
    <Carousel/>   
    <FeaturedProducts/>
    <TopProducts/>
      <Footer/>
    </>
  )
}

export default App