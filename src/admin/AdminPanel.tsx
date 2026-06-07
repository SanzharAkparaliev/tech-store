import { Routes, Route } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";
import AdminLogin from "./AdminLogin";
import AdminLayout from "./AdminLayout";
import Dashboard from "./Dashboard";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import "./admin.css";

export default function AdminPanel() {
  const { isAuthenticated } = useAdmin();

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/new" element={<ProductForm />} />
        <Route path="products/edit/:id" element={<ProductForm />} />
      </Route>
    </Routes>
  );
}
