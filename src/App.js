import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/auth/Login";
import Reset from "./pages/Home/auth/Reset";
import Forgot from "./pages/Home/auth/Forgot";
import Register from "./pages/Home/auth/Register";
import Sidebar from "./components/sidebar/Sidebar";
import Layout from "./components/layout/Layout"; 
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/resetpassword/:resetToken" element={<Reset/>}/>
    <Route path="/forgot" element={<Forgot/>}/>
    <Route path="/register" element={<Register/>}/>

    <Route path="/dashboard" element={
    <Sidebar>
      <Layout>
        <Dashboard/>
        </Layout>
    </Sidebar>} />
   </Routes>
   </BrowserRouter>
  );
}
export default App;
