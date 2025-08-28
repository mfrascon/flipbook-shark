import { useState } from "react";
import { books } from "./data/booksdata";
import Book from "./components/Book";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [activeBook, setActiveBook] = useState(books[0].id);
  const selectedBook = books.find((b) => b.id === activeBook);

  return (
    <div className="app-container">
      {/* Sidebar component */}
      <Sidebar 
        books={books} 
        activeBook={activeBook} 
        onSelectBook={setActiveBook} 
      />

      {/* Main content */}
      <div className="main-content">
        <Book
          key={selectedBook.id}   // ensures remount on book change
          pages={selectedBook.pages}
          width={selectedBook.width}
          height={selectedBook.height}
        />
      </div>
    </div>
  );
}

export default App;
