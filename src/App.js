import './App.css';
import Addtocartmodal from './Components/AddToCartModal/Addtocartmodal';
import Header from './Components/Header/Header';
import { Orderplaced } from './Components/OrderPlaced/Orderplaced';
import Pagination from './Components/Pagination/Pagination';
import Productcard from './Components/ProductCard/Productcard';

function App() {
  return (
    <div className="Ap">

      <Header />
      <Productcard />
      <Addtocartmodal />
      <Pagination />
      <Orderplaced />
    </div>
  );
}

export default App;
