// src/components/Book.jsx
import HTMLFlipBook from "react-pageflip";

function Book({ pages }) {
  return (
    <HTMLFlipBook
      width={650} 
      height={800}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size='fixed'
    >
      {pages.map((img, i) => (
        <div key={i} className="page" style={{ background: "transparent" }}>
          <div className="page-content">
            <img
              src={img}
              alt={`page ${i + 1}`}
              className={i === 0 ? "book-cover" : "page-image"}
            />
          </div>
        </div>
      ))}
    </HTMLFlipBook>
  );
}

export default Book;
