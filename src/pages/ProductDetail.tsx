import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Check, Star, ArrowLeft, Package, Shield, Truck } from "lucide-react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function formatPrice(price: number) {
  return price.toLocaleString("ru-RU") + " сом";
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem, isInCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="not-found">
        <h2>Продукт табылган жок</h2>
        <Link to="/catalog" className="btn btn-primary">
          <ArrowLeft size={18} /> Каталогго кайтуу
        </Link>
      </div>
    );
  }

  const inCart = isInCart(product.id);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <div className="product-detail">
      <Link to="/catalog" className="back-link">
        <ArrowLeft size={18} /> Каталогго кайтуу
      </Link>

      <div className="detail-main">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
          {product.badge && (
            <span className={`product-badge badge-${product.badge}`}>
              {product.badge === "new" ? "Жаңы" : product.badge === "sale" ? "Арзандатуу" : "Хит"}
            </span>
          )}
        </div>

        <div className="detail-info">
          <p className="detail-brand">{product.brand}</p>
          <h1>{product.name}</h1>

          <div className="detail-rating">
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={i < Math.round(product.rating) ? "#fbbf24" : "none"}
                  stroke="#fbbf24"
                />
              ))}
            </div>
            <span>
              {product.rating} ({product.reviews} сын-пикир)
            </span>
          </div>

          <div className="detail-price">
            <span className="price-main">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <>
                <span className="price-old">{formatPrice(product.oldPrice)}</span>
                <span className="discount-tag">-{discount}%</span>
              </>
            )}
          </div>

          <p className={`stock-status ${product.inStock ? "in-stock" : "no-stock"}`}>
            <Package size={16} />
            {product.inStock ? "Кампада бар" : "Кампада жок"}
          </p>

          <p className="detail-desc">{product.description}</p>

          <button
            className={`btn ${inCart ? "btn-success" : "btn-primary"} add-btn`}
            onClick={() => !inCart && addItem(product)}
            disabled={!product.inStock}
          >
            {inCart ? (
              <>
                <Check size={18} /> Корзинада
              </>
            ) : (
              <>
                <ShoppingCart size={18} /> Корзинага кошуу
              </>
            )}
          </button>

          <div className="detail-perks">
            <div>
              <Truck size={18} /> Бишкек боюнча тез жеткирүү
            </div>
            <div>
              <Shield size={18} /> Расмий кепилдик
            </div>
          </div>
        </div>
      </div>

      {/* Specs */}
      <section className="specs-section">
        <h2>Техникалык мүнөздөмөлөр</h2>
        <div className="specs-table">
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className="spec-row">
              <span className="spec-label">{key}</span>
              <span className="spec-value">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section">
          <h2>Окшош продукттар</h2>
          <div className="products-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
