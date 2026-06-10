/* 260606 front프로젝트 시작 */

/* 1단계 관리자 레이아웃 + 라우터 생성 */
/*  */
/*  */


// import './App.css'

import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";


function App() {


  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
