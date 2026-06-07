import { useAdmin } from "../context/AdminContext";
import { Package, DollarSign, TrendingUp, AlertTriangle } from "lucide-react";
import { categories } from "../data/categories";

export default function Dashboard() {
  const { products } = useAdmin();

  const totalProducts = products.length;
  const inStock = products.filter((p) => p.inStock).length;
  const outOfStock = totalProducts - inStock;
  const avgPrice = Math.round(
    products.reduce((sum, p) => sum + p.price, 0) / totalProducts
  );

  const categoryStats = categories.map((cat) => ({
    ...cat,
    count: products.filter((p) => p.category === cat.id).length,
  }));

  return (
    <div className="admin-dashboard">
      <h1>Башкаруу панели</h1>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <div className="admin-stat-icon blue">
            <Package size={24} />
          </div>
          <div className="admin-stat-info">
            <span className="admin-stat-value">{totalProducts}</span>
            <span className="admin-stat-label">Бардык продукттар</span>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon green">
            <TrendingUp size={24} />
          </div>
          <div className="admin-stat-info">
            <span className="admin-stat-value">{inStock}</span>
            <span className="admin-stat-label">Бар болгондор</span>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon red">
            <AlertTriangle size={24} />
          </div>
          <div className="admin-stat-info">
            <span className="admin-stat-value">{outOfStock}</span>
            <span className="admin-stat-label">Жок болгондор</span>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon purple">
            <DollarSign size={24} />
          </div>
          <div className="admin-stat-info">
            <span className="admin-stat-value">
              {avgPrice.toLocaleString("ru-RU")} ₸
            </span>
            <span className="admin-stat-label">Орточо баа</span>
          </div>
        </div>
      </div>

      <div className="admin-section">
        <h2>Категориялар боюнча</h2>
        <div className="admin-category-grid">
          {categoryStats.map((cat) => (
            <div key={cat.id} className="admin-category-card">
              <span className="admin-category-icon">{cat.icon}</span>
              <span className="admin-category-name">{cat.name}</span>
              <span className="admin-category-count">{cat.count} продукт</span>
            </div>
          ))}
        </div>
      </div>

      <div className="admin-section">
        <h2>Акыркы кошулган продукттар</h2>
        <div className="admin-recent-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Аталышы</th>
                <th>Бренд</th>
                <th>Баасы</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              {products.slice(-5).reverse().map((p) => (
                <tr key={p.id}>
                  <td>#{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.brand}</td>
                  <td>{p.price.toLocaleString("ru-RU")} ₸</td>
                  <td>
                    <span className={`admin-badge ${p.inStock ? "green" : "red"}`}>
                      {p.inStock ? "Бар" : "Жок"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
