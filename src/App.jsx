// src/App.jsx
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { books } from "./data/booksData";
import Book from "./components/Book";
import Sidebar from "./components/Sidebar";
import "./App.css";

// Wrapper to get the bookId from the URL
function BookWrapper() {
  const { bookId } = useParams();
  const selectedBook = books.find((b) => b.id === bookId);

  if (!selectedBook) {
    return <div className="not-found">Book not found</div>;
  }

  return (
    <Book
      key={selectedBook.id}
      pages={selectedBook.pages}
      width={selectedBook.width}
      height={selectedBook.height}
    />
  );
}

function App() {
  return (
    <div className="app-container">
      {/* Sidebar is always visible */}
      <Sidebar books={books} />

      {/* Main content depends on route */}
      <div className="main-content">
        <Routes>
          {/* Default route: redirect to first book */}
          <Route path="/" element={<Navigate to={`/${books[0].id}`} replace />} />

          {/* Book routes */}
          <Route path="/:bookId" element={<BookWrapper />} />

          {/* 404 fallback */}
          <Route path="*" element={<div className="not-found">Page not found</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
