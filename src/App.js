import './App.css';
import LandingPage from './view/LandingPage';
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import AdminLogin from './view/AdminLogin';
import DashboardPage from './view/Dashboard/DashboardPage';
import Orders from './view/Dashboard/Orders';
import AddPost from './view/Dashboard/AddPost';
import Cart from './view/Cart';
import Fooods from './components/FoodS';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/food' element={<Fooods />} />
      <Route path='/cart' element={<Cart />} />
    
      <Route path='/admin' element={<AdminLogin />} />

      <Route path='/dashboard' element={<DashboardPage />} >
      <Route path='orders' element={<Orders />} />
      <Route path='addpost' element={<AddPost />} />

      </Route>


    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
