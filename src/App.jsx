import './App.css'
import Carousel from './Components/Carousel/Carousel'
import FeaturedProducts from './Components/FeaturedProd/Featured'

import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header'

function App() {
  
  return (
    <>
      <Header/>
    <Carousel/>   
    <FeaturedProducts/>
      <Footer/>
    </>
  )
}

export default App