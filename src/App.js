import { BrowserRouter, Routes, Route } from "react-router-dom"


import "./App.css"
import { Home } from "./pages/Home"
import Header from "./components/header"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { Footer } from "./components/footer"



const App = () => {
  return (
    <BrowserRouter>
    <Header />
<Routes>
<Route index element={ <Home />} />
<Route path='about' element={<About />} />
<Route path='contact' element={ <Contact />} />
<Route path='*' element={<NotFound />} />
</Routes>
      <Footer />
    </BrowserRouter>

      // <Home />
      // <About />
      // <Contact />
  )
}

const NotFound = () => {
  return (
    <>
    <h3>page not found</h3>
    </>
  )
}

export default App
