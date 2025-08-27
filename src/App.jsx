import { useState } from "react";
import { books } from "./data/booksdata";
import Book from "./components/Book";
import "./App.css";

function App() {
  const [activeBook, setActiveBook] = useState(books[0].id);

  const selectedBook = books.find((b) => b.id === activeBook);

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">Flipbooks</h2>
        {books.map((book) => (
          <button
            key={book.id}
            className={`tab-btn ${activeBook === book.id ? "active" : ""}`}
            onClick={() => setActiveBook(book.id)}
          >
            {book.title}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="main-content">
        <Book pages={selectedBook.pages} />
      </div>
    </div>
  );
}

export default App;
