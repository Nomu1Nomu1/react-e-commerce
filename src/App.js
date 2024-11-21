import logo from './logo.svg';
import './styles.css';
import Head from './component/head.js';
import Nav from './component/nav.js';
import Carousel from './component/carousel.js';
import ProductGrid from './component/product-grid.js';

function App() {
  return (
    <div className='App'>
      <Head />
      <Nav />
      <Carousel />
      <ProductGrid />
    </div>
  )
}

export default App;
