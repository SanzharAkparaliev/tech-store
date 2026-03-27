import { Cpu, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <Cpu size={24} />
            <span>TechStore</span>
          </div>
          <p>
            Компьютердик техника жана тетиктердин электрондук соода системасы.
            Сапаттуу продукттар, тез жеткирүү.
          </p>
        </div>

        <div className="footer-links">
          <h4>Навигация</h4>
          <Link to="/">Башкы бет</Link>
          <Link to="/catalog">Каталог</Link>
          <Link to="/cart">Корзина</Link>
          <Link to="/about">Биз жөнүндө</Link>
        </div>

        <div className="footer-links">
          <h4>Категориялар</h4>
          <Link to="/catalog?cat=laptops">Ноутбуктар</Link>
          <Link to="/catalog?cat=desktops">Компьютерлер</Link>
          <Link to="/catalog?cat=monitors">Мониторлор</Link>
          <Link to="/catalog?cat=components">Тетиктер</Link>
        </div>

        <div className="footer-contact">
          <h4>Байланыш</h4>
          <p><Phone size={14} /> +996 (555) 123-456</p>
          <p><Mail size={14} /> info@techstore.kg</p>
          <p><MapPin size={14} /> Бишкек, Чүй пр. 150</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 TechStore. Бардык укуктар корголгон.</p>
      </div>
    </footer>
  );
}
