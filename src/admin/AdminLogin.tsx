import { useState } from "react";
import { useAdmin } from "../context/AdminContext";
import { Lock, User } from "lucide-react";

export default function AdminLogin() {
  const { login } = useAdmin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login(username, password)) {
      setError("Логин же пароль туура эмес");
    }
  };

  return (
    <div className="admin-login">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <div className="admin-login-header">
          <Lock size={40} />
          <h1>Админ панель</h1>
          <p>Системага кирүү</p>
        </div>

        {error && <div className="admin-error">{error}</div>}

        <div className="admin-field">
          <label>
            <User size={16} /> Логин
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="admin"
          />
        </div>

        <div className="admin-field">
          <label>
            <Lock size={16} /> Пароль
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
          />
        </div>

        <button type="submit" className="admin-btn admin-btn-primary">
          Кирүү
        </button>
      </form>
    </div>
  );
}
