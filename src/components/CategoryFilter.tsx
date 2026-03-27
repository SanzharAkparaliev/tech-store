import { categories } from "../data/categories";
import type { CategoryId } from "../types";

interface Props {
  selected: CategoryId | null;
  onSelect: (id: CategoryId | null) => void;
}

export default function CategoryFilter({ selected, onSelect }: Props) {
  return (
    <div className="category-filter">
      <button
        className={`cat-btn ${selected === null ? "active" : ""}`}
        onClick={() => onSelect(null)}
      >
        Баары
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`cat-btn ${selected === cat.id ? "active" : ""}`}
          onClick={() => onSelect(cat.id)}
        >
          <span className="cat-icon">{cat.icon}</span>
          <span>{cat.name}</span>
        </button>
      ))}
    </div>
  );
}
