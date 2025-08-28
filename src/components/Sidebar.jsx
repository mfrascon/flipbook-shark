// src/components/Sidebar.jsx
function Sidebar({ books, activeBook, onSelectBook }) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Flipbooks</h2>
      {books.map((book) => (
        <button
          key={book.id}
          className={`tab-btn ${activeBook === book.id ? "active" : ""}`}
          onClick={() => onSelectBook(book.id)}
        >
          {book.title}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
