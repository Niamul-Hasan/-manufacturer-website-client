import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Home from "./Pages/HomePage/Home";
import CustomerReview from "./Pages/HomePage/Review/CustomerReview";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import MyOrder from "./Pages/MyOrder/MyOrder";
import HomeUpdate from "./Pages/Update/HomeUpdate";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/review' element={<CustomerReview></CustomerReview>}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/dash' element={<DashBoard />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/myorder/:id' element={<MyOrder />}></Route>

        <Route path="/update/:id" element={<HomeUpdate />}></Route>
      </Routes>
    </div>
  );
}

export default App;
