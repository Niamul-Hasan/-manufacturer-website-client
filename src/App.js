import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Home from "./Pages/HomePage/Home";
import CustomerReview from "./Pages/HomePage/Review/CustomerReview";
import Login from "./Pages/Login/Login";
import PrivateLogin from "./Pages/Login/PrivateLogin";
import Register from "./Pages/Login/Register";
import MyOrder from "./Pages/MyOrder/MyOrder";
import HomeUpdate from "./Pages/Update/HomeUpdate";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadMyOrder from "./Pages/DashBoard/LoadMyOrder";
import ManageOrders from "./Pages/DashBoard/ManageOrders";
import Users from "./Pages/DashBoard/Users";
import Payment from "./Pages/DashBoard/Payment";
import NotFound from "./Pages/Not Found/NotFound";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='/dash' element={<PrivateLogin><DashBoard /></PrivateLogin>}>
          <Route index element={<LoadMyOrder />}></Route>
          <Route path='/dash/review' element={<CustomerReview></CustomerReview>}></Route>
          <Route path='/dash/profile' element={<CustomerReview></CustomerReview>}></Route>
          <Route path='/dash/payment/:orderId' element={<Payment />}></Route>
          <Route path='/dash/manage' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='/dash/user' element={<Users></Users>}></Route>
        </Route>


        <Route path='/myorder/:id' element={<PrivateLogin><MyOrder /></PrivateLogin>}></Route>

        <Route path="/update/:id" element={<HomeUpdate />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
