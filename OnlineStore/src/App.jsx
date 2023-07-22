
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import ProductDetailPage from './Components/ProductDetailPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/product/:productId" element={<ProductDetailPage />} />
     </Routes>
    </>
  )
}

export default App
