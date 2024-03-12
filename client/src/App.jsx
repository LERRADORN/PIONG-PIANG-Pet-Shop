
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Homepage, ProductsPage, DogPage, CatPage, FishPage, BirdPage, AboutPage, ContactPage, FaqsPage, Error404} from "../src/components/Pages"



function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/products' element={<ProductsPage />} />

          <Route path='/products/dog' element={<DogPage />} />
          <Route path='/products/cat' element={<CatPage />} />
          <Route path='/products/fish' element={<FishPage />} />
          <Route path='/products/bird' element={<BirdPage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/faqs' element={<FaqsPage />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App