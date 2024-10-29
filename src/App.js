import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Addtocartmodal from './Components/AddToCartModal/Addtocartmodal';
import Header from './Components/Header/Header';
import { Orderplaced } from './Components/OrderPlaced/Orderplaced';
import Pagination from './Components/Pagination/Pagination';
import Productcard from './Components/ProductCard/Productcard';

function App() {
  return (
    <div className="Ap">
      <Router>
        <Routes>
          <Route path="/chaperoneapp" element={<Productcard />} />
          <Route path="/Thankyouform" element={<Orderplaced />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
