import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import LogoImg from './assets/eco-5465429_640.png'
import Cocktail from './component/Cocktail.jsx'
import Products from './components/Dropdown.jsx'

function App() {

  return (
    <Router>
      <Header LogoImg={LogoImg} />
      <nav>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/cocktail">Cocktail</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cocktail" element={<Cocktail />} />
        </Routes>
      </nav>
      <Routes>
        
      </Routes>
    </Router>
  )
}

export default App
