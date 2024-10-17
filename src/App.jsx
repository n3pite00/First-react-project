import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import LogoImg from './assets/eco-5465429_640.png'
import Cocktail from './components/Cocktail.jsx'
import Products from './components/Dropdown.jsx'
import './styles/navbar.css'

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
        </nav>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cocktail" element={<Cocktail />} />
        </Routes>
    </Router>
  )
}

export default App