import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import ProductsDisplay from './pages/ProductsDisplay/ProductsDisplay';
import ProductsEdit from './pages/ProductsEditList/ProductsEditList';
import ProductEdit from './pages/ProductEdit/ProductEdit';
import AddProduct from './pages/AddProduct/AddProduct';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ProductDetails from './pages/ProductDetails.js/ProductDetails';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductsDisplay />} />
        <Route path='/products/table' element={<ProductsEdit />} />
        <Route path='/product/add' element={<AddProduct />} />
        <Route path='/product/edit' element={<ProductEdit />} />
        <Route path='/product/details/:id' element={<ProductDetails />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
