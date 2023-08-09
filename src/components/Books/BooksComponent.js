import React from 'react';
import BooksGrid from './BooksGrid'
import BooksHeader from './BooksHeader'

export default function BooksComponent() {
 
  return (
    <div className="flex-col m-6 border p-5 rounded-lg hover:bg-slate-200">
       {BooksList.map((books)=>{
          const{title,writer,page,quotes} = books;
          return(
            <BooksGrid
            title= {title}
            writer= {writer}
            pages = {page}
            quotes = {quotes}
          />
          )
        })}
    </div>

  );

};

const BooksList = [
  {
  title:"Atomic Habits",
  writer:"James Clear",
  pages:"320",
  pict:require("../../images/Books/AtomicHabits.jpeg"),
  },
  {
  title:"Atomic Habits",
  writer:"James Clear",
  pages:"320",
  pict:require("../../images/Books/AtomicHabits.jpeg"),
  },
  {
    title:"Atomic Habits",
    writer:"James Clear",
    pages:"320",
    pict:require("../../images/Books/AtomicHabits.jpeg"),
    },
]
