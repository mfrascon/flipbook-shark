// src/data/booksData.js

import cover1 from "../assets/book1/cover.png";
import page1 from "../assets/book1/page-1.png";
import page2 from "../assets/book1/page-2.png";
import page3 from "../assets/book1/page-3.png";
import page4 from "../assets/book1/page-4.png";
import page5 from "../assets/book1/page-5.png";
import page6 from "../assets/book1/page-6.png";
import page7 from "../assets/book1/page-7.png";
import page8 from "../assets/book1/page-8.png";
import page9 from "../assets/book1/page-9.png";
import page10 from "../assets/book1/page-10.png";

// import cover2 from "../assets/book2/cover.png";
import page1_2 from "../assets/book2/page-1.png";
import page2_2 from "../assets/book2/page-2.png";

// import cover3 from "../assets/book3/cover.png";
import page1_3 from "../assets/book3/page-1.png";
import page2_3 from "../assets/book3/page-2.png";
import page3_3 from "../assets/book3/page-3.png";
import page4_3 from "../assets/book3/page-3.png";

export const books = [
  {
    id: "book1",
    title: "Your Go-To Guide",
    pages: [cover1, page1, page2, page3, page4, page5, page6, page7, page8, page9, page10],
  },
  {
    id: "book2",
    title: "Sorsogon Map",
    pages: [cover1, page1_2, page2_2],
  },
  {
    id: "book3",
    title: "Book Three",
    pages: [page1_3, page2_3, page3_3, page4_3],
  },
];
