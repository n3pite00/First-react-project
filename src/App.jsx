import Header from './components/Header.jsx'
import LogoImg from './assets/eco-5465429_640.png'
import Products from './components/Dropdown.jsx'


function App() {

  return(
  <>
      <Header LogoImg={LogoImg}/>
      <Products/>
  </>
  );
}

export default App
