import React from "react";

export default function RecentSearches({ items, onClick }) {
  if (!items.length) return null;

  return (
    <div className="recent">
      <h3>Recent Searches</h3>
      <ul>
        {items.map((c, i) => (
          <li key={i}>
            <button data-testid={`recent-${i}`} onClick={() => onClick(c)}>
              {c}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
