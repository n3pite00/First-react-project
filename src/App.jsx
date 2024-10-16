import Header from './components/Header.jsx'
import LogoImg from './assets/eco-5465429_640.png'
import Products from './components/Dropdown.jsx'
import Quantity from './components/Quantity.jsx'
import ProductionInfo from './components/info.jsx'


function App() {

  return(
  <>
      <Header LogoImg={LogoImg}/>
      <Products/>
  </>
  );
}

export default App
