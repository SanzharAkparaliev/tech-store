import { useState } from "react";
import { useAdmin } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2, Search, Plus } from "lucide-react";
import { categories } from "../data/categories";
import type { CategoryId } from "../types";

export default function ProductList() {
  const { products, deleteProduct } = useAdmin();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<CategoryId | "">("");

  const filtered = products.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !categoryFilter || p.category === categoryFilter;
    return matchSearch && matchCategory;
  });

  const handleDelete = (id: number, name: string) => {
    if (confirm(`"${name}" продуктун өчүрүүнү каалайсызбы?`)) {
      deleteProduct(id);
    }
  };

  return (
    <div className="admin-products">
      <div className="admin-page-header">
        <h1>Продукттар ({filtered.length})</h1>
        <button
          className="admin-btn admin-btn-primary"
          onClick={() => navigate("/admin/products/new")}
        >
          <Plus size={18} /> Жаңы продукт
        </button>
      </div>

      <div className="admin-filters">
        <div className="admin-search">
          <Search size={18} />
          <input
            type="text"
            placeholder="Издөө..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value as CategoryId | "")}
          className="admin-select"
        >
          <option value="">Бардык категориялар</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Сүрөт</th>
              <th>Аталышы</th>
              <th>Бренд</th>
              <th>Категория</th>
              <th>Баасы</th>
              <th>Статус</th>
              <th>Аракеттер</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id}>
                <td>
                  <img src={p.image} alt={p.name} className="admin-product-thumb" />
                </td>
                <td>
                  <strong>{p.name}</strong>
                </td>
                <td>{p.brand}</td>
                <td>
                  {categories.find((c) => c.id === p.category)?.name}
                </td>
                <td>{p.price.toLocaleString("ru-RU")} ₸</td>
                <td>
                  <span className={`admin-badge ${p.inStock ? "green" : "red"}`}>
                    {p.inStock ? "Бар" : "Жок"}
                  </span>
                </td>
                <td>
                  <div className="admin-actions">
                    <button
                      className="admin-icon-btn edit"
                      onClick={() => navigate(`/admin/products/edit/${p.id}`)}
                      title="Өзгөртүү"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      className="admin-icon-btn delete"
                      onClick={() => handleDelete(p.id, p.name)}
                      title="Өчүрүү"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
