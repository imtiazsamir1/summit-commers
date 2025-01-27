import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Layout from "./component/auth/layout";
import Register from "./pages/auth/register";
import AdLayout from "./component/admin-view/AdLayout";
import AdDashboard from "./pages/admin-view/dashboard";
import AdProducts from "./pages/admin-view/products";
import AdOrders from "./pages/admin-view/orders";
import AdFeatures from "./pages/admin-view/features";
import ShoLyout from "./component/shopping-view/ShoLayout";
import NotFound from "./pages/admin-view/not-found";
import Account from "./pages/shopping-view/Account";
import Checkout from "./pages/shopping-view/Checkout";
import Home from "./pages/shopping-view/Home";
import Listing from "./pages/shopping-view/Listing";


const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      

       <Routes>
        <Route path="/auth" element={<Layout/>}>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        </Route>
        <Route path="/admin" element={<AdLayout/>}>
        <Route path="dashboard" element={<AdDashboard/>}/>
        <Route path="products" element={<AdProducts/>} />
        <Route path="orders" element={<AdOrders/>}/>
        <Route path="features" element={<AdFeatures/>}/>
        </Route>
        <Route  path="/shop" element={<ShoLyout/>} >
        <Route path="account" element={<Account/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="listing" element={<Listing/>}/>
        

        </Route>
       <Route  >
        <Route  path="*" element={<NotFound/>} />
       </Route>

       
       </Routes>
    </div>
  );
};

export default App;