import React from 'react';
import BooksGrid from './BooksGrid'

export default function BooksComponent() {
 
  return (
    <div className="flex flex-col rounded-lg">
       {BooksList.map((books)=>{
          const{title,writer,page,quotes,pict,shortSummary,howDiscovered,whoShouldRead} = books;
          return(
            <BooksGrid
            title= {title}
            writer= {writer}
            pages = {page}
            quotes = {quotes}
            pict = {pict}
            shortSummary = {shortSummary}
            howDiscovered={howDiscovered}
            whoShouldRead={whoShouldRead}
          />
          )
        })}
    </div>

  );

};


const atomicHabitsQuotes = [
  "Consistency is the key.",
  "I'm handsome.",
  "You are handsome."
];




const BooksList = [
  {
    title:"Think Like a Monk",
    writer:"Jay Shetty",
    pages:"320",
    pict:require("../../images/Books/thinklikeamonk.jpeg"),
    shortSummary:"",
    quotes:"",
    howDiscovered:"Been following Jay Shetty since high school",
    whoShouldRead:"Someone who wants to remain mentally calm while chasing capitalism",
},
  {
  title:"Atomic Habits",
  writer:"James Clear",
  pages:"320",
  pict:require("../../images/Books/AtomicHabits.jpeg"),
  shortSummary:"",
  quotes:"A good book for someone who wants to build consistency and find it hard to start and stick consistently to a habit, for ultimately achieving goal",
  howDiscovered:"Everybody says it's good, very basic",
  whoShouldRead:"A good book for someone who wants to build consistency and find it hard to start and stick consistently to a habit, for ultimately achieving goal",

  },
  {
  title:"You Do You",
  writer:"Fellexandro Ruby",
  pages:"320",
  pict:require("../../images/Books/youdoyou.jpeg"),
  shortSummary:"This books is in Indonesian Language",
  quotes:"A good book for someone who wants to build consistency and find it hard to start and stick consistently to a habit, for ultimately achieving goal",
  howDiscovered:"I asked the writer himself to bring the book when he visited Singapore, signed it on the spot. I've been listening to his podcast, Thirty days of Lunch for the past 4 years.",
  whoShouldRead:"The book is in Indonesian language, a good book to start discovering your inner self, purpose and strategy to achieve your goal",
  },
  {
    title:"Good to Great",
    writer:"(Jim Collins)",
    pages:"320",
    pict:require("../../images/Books/goodtogreat.jpeg"),
    shortSummary:"",
    quotes:"",
    howDiscovered:"Was playing secret santa games and I asked for this give. Kudos to Stanford, my secret Santa",
    whoShouldRead:"Entrepreneurs, intrapreneurs, students, or whoever who wants to create a meaningful and longlasting projects",
    },
  {
      title:"Measure What Matters",
      writer:"(John Doerr)",
      pages:"320",
      pict:require("../../images/Books/MeasureWhatMatters.jpeg"),
      shortSummary:"",
      quotes:"",
      howDiscovered:"My fellow SUTD and Canisius senior, Jeremia , was cleaning up his book collections. Had a good catchup session as well",
      whoShouldRead:"Entrepreneurs, intrapreneurs, students, or whoever who wants to create a meaningful and longlasting projects",
      },
  {
        title:"The Lean Startup",
        writer:"(Eric Ries)",
        pages:"320",
        pict:require("../../images/Books/theleanstartup.jpeg"),
        shortSummary:"",
        quotes:"",
        howDiscovered:"Crashed into my friend at NUS, Radian, borrowed the book and never returned",
        whoShouldRead:"Entrepreneurs, intrapreneurs, students, or whoever who wants to create a meaningful and longlasting projects",
    },
    {
      title:"Zero to One",
      writer:"(Peter Thiel)",
      pages:"320",
      pict:require("../../images/Books/zerotoone.png"),
      shortSummary:"",
      quotes:"",
      howDiscovered:"Crashed into my friend at NUS, Kevin, borrowed the book and never returned",
      whoShouldRead:"Entrepreneurs, intrapreneurs, students, or whoever who wants to create a meaningful and longlasting projects",
  },
  {
    title:"High Hanging Fruit",
    writer:"(Mark Rampolla)",
    pages:"320",
    pict:require("../../images/Books/highHangingFruit.jpeg"),
    shortSummary:"",
    quotes:"",
    howDiscovered:"Discounted at Big Bad Wolf Books Festival",
    whoShouldRead:"",
},
{
  title:"The Snapchat Story",
  writer:"(Billy Galagher)",
  pages:"320",
  pict:require("../../images/Books/TheSnapchatStory.jpeg"),
  shortSummary:"",
  quotes:"",
  howDiscovered:"Discounted at Big Bad Wolf Books Festival",
  whoShouldRead:"",
},
  
]



