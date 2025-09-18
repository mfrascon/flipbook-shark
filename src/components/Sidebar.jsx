// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";

function Sidebar({ books }) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Flipbooks</h2>
      {books.map((book) => (
        <NavLink
          key={book.id}
          to={`/${book.id}`}
          className={({ isActive }) =>
            `tab-btn ${isActive ? "active" : ""}`
          }
        >
          {book.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;
