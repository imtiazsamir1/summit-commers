import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Layout from "./component/auth/layout";
import Register from "./pages/auth/register";
import AdLayout from "./component/admin-view/AdLayout";
import AdDashboard from "./pages/admin-view/dashboard";
import AdProducts from "./pages/admin-view/products";
import AdOrders from "./pages/admin-view/orders";
import AdFeatures from "./pages/admin-view/features";


const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
       <h1>Header component</h1>

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
       </Routes>
    </div>
  );
};

export default App;