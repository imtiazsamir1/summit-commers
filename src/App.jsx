import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Layout from "./component/auth/layout";
import Register from "./pages/auth/register";


const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
       <h1>Header component</h1>

       <Routes>
        <Route path="/auth" element={<Layout/>}>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        </Route>
       </Routes>
    </div>
  );
};

export default App;