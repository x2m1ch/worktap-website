import { BrowserRouter, Routes , Route } from "react-router-dom"

import Market from "./pages/Market"
import Main from "./pages/Main"
import Works from "./pages/Works"

import './reset.css'
import './global.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/market" element={<Market />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
