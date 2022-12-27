import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";

const DefaultProduct = React.lazy(() => import ('./Layouts/DefaultProducts'))
const Products = React.lazy(() => import ('./Pages/Products'))

function App() {
  return (
    <Routes>
      <Route path='/' element={<DefaultProduct />}>
        <Route index element={<Products />} />
      </Route>  
    </Routes>
  );
}

export default App;
