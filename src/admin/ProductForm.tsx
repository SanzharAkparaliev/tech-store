import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";
import { categories } from "../data/categories";
import { Save, ArrowLeft } from "lucide-react";
import type { Product, CategoryId } from "../types";

export default function ProductForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const { addProduct, updateProduct, getProduct } = useAdmin();

  const [form, setForm] = useState({
    name: "",
    brand: "",
    category: "laptops" as CategoryId,
    price: 0,
    oldPrice: 0,
    image: "",
    rating: 4.5,
    reviews: 0,
    inStock: true,
    description: "",
    badge: "" as Product["badge"] | "",
    specs: "",
  });

  useEffect(() => {
    if (isEdit && id) {
      const product = getProduct(Number(id));
      if (product) {
        setForm({
          name: product.name,
          brand: product.brand,
          category: product.category,
          price: product.price,
          oldPrice: product.oldPrice || 0,
          image: product.image,
          rating: product.rating,
          reviews: product.reviews,
          inStock: product.inStock,
          description: product.description,
          badge: product.badge || "",
          specs: Object.entries(product.specs)
            .map(([k, v]) => `${k}: ${v}`)
            .join("\n"),
        });
      }
    }
  }, [isEdit, id, getProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const specs: Record<string, string> = {};
    form.specs.split("\n").forEach((line) => {
      const [key, ...rest] = line.split(":");
      if (key && rest.length) {
        specs[key.trim()] = rest.join(":").trim();
      }
    });

    const productData = {
      name: form.name,
      brand: form.brand,
      category: form.category,
      price: form.price,
      oldPrice: form.oldPrice || undefined,
      image: form.image || `https://placehold.co/400x300/1a1a2e/67e8f9?text=${encodeURIComponent(form.name)}`,
      rating: form.rating,
      reviews: form.reviews,
      inStock: form.inStock,
      description: form.description,
      badge: (form.badge || undefined) as Product["badge"],
      specs,
    };

    if (isEdit && id) {
      updateProduct(Number(id), productData);
    } else {
      addProduct(productData);
    }

    navigate("/admin/products");
  };

  const update = (field: string, value: unknown) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="admin-product-form">
      <div className="admin-page-header">
        <h1>{isEdit ? "Продуктту өзгөртүү" : "Жаңы продукт кошуу"}</h1>
        <button
          className="admin-btn admin-btn-secondary"
          onClick={() => navigate("/admin/products")}
        >
          <ArrowLeft size={18} /> Артка
        </button>
      </div>

      <form onSubmit={handleSubmit} className="admin-form">
        <div className="admin-form-grid">
          <div className="admin-field">
            <label>Аталышы *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              required
            />
          </div>

          <div className="admin-field">
            <label>Бренд *</label>
            <input
              type="text"
              value={form.brand}
              onChange={(e) => update("brand", e.target.value)}
              required
            />
          </div>

          <div className="admin-field">
            <label>Категория</label>
            <select
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="admin-field">
            <label>Баасы (₸) *</label>
            <input
              type="number"
              value={form.price}
              onChange={(e) => update("price", Number(e.target.value))}
              required
              min={0}
            />
          </div>

          <div className="admin-field">
            <label>Эски баасы (₸)</label>
            <input
              type="number"
              value={form.oldPrice}
              onChange={(e) => update("oldPrice", Number(e.target.value))}
              min={0}
            />
          </div>

          <div className="admin-field">
            <label>Сүрөт URL</label>
            <input
              type="text"
              value={form.image}
              onChange={(e) => update("image", e.target.value)}
              placeholder="https://..."
            />
          </div>

          <div className="admin-field">
            <label>Рейтинг</label>
            <input
              type="number"
              value={form.rating}
              onChange={(e) => update("rating", Number(e.target.value))}
              min={0}
              max={5}
              step={0.1}
            />
          </div>

          <div className="admin-field">
            <label>Пикирлер саны</label>
            <input
              type="number"
              value={form.reviews}
              onChange={(e) => update("reviews", Number(e.target.value))}
              min={0}
            />
          </div>

          <div className="admin-field">
            <label>Бейдж</label>
            <select
              value={form.badge}
              onChange={(e) => update("badge", e.target.value)}
            >
              <option value="">Жок</option>
              <option value="new">Жаңы</option>
              <option value="sale">Арзандатуу</option>
              <option value="hit">Хит</option>
            </select>
          </div>

          <div className="admin-field checkbox">
            <label>
              <input
                type="checkbox"
                checked={form.inStock}
                onChange={(e) => update("inStock", e.target.checked)}
              />
              Кампада бар
            </label>
          </div>
        </div>

        <div className="admin-field">
          <label>Сүрөттөмө</label>
          <textarea
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
            rows={3}
          />
        </div>

        <div className="admin-field">
          <label>Мүнөздөмөлөр (ар бир сап: Ачкыч: Маани)</label>
          <textarea
            value={form.specs}
            onChange={(e) => update("specs", e.target.value)}
            rows={6}
            placeholder={"Процессор: Intel Core i7\nВидеокарта: RTX 4060\nОперативдик эс: 16GB"}
          />
        </div>

        <button type="submit" className="admin-btn admin-btn-primary">
          <Save size={18} /> {isEdit ? "Сактоо" : "Кошуу"}
        </button>
      </form>
    </div>
  );
}
