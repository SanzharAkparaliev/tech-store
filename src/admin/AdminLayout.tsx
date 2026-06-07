import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  LogOut,
  Store,
} from "lucide-react";

export default function AdminLayout() {
  const { logout } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <Store size={24} />
          <span>TechStore</span>
        </div>

        <nav className="admin-nav">
          <NavLink to="/admin" end className="admin-nav-link">
            <LayoutDashboard size={18} />
            <span>Башкы бет</span>
          </NavLink>
          <NavLink to="/admin/products" className="admin-nav-link">
            <Package size={18} />
            <span>Продукттар</span>
          </NavLink>
          <NavLink to="/admin/products/new" className="admin-nav-link">
            <PlusCircle size={18} />
            <span>Жаңы продукт</span>
          </NavLink>
        </nav>

        <div className="admin-sidebar-footer">
          <a href="/" className="admin-nav-link">
            <Store size={18} />
            <span>Дүкөнгө кайтуу</span>
          </a>
          <button onClick={handleLogout} className="admin-nav-link admin-logout-btn">
            <LogOut size={18} />
            <span>Чыгуу</span>
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
