import React from 'react';
import BooksGrid from './BooksGrid'

export default function BooksComponent() {
 
  return (
    <div className="flex flex-col rounded-lg pt-12">
       {BooksList.map((books)=>{
          const{title,writer,page,quotes,pict,shortSummary,howDiscovered,oneLinerDescription} = books;
          return(
            <BooksGrid
            title= {title}
            writer= {writer}
            pages = {page}
            quotes = {quotes}
            pict = {pict}
            shortSummary = {shortSummary}
            howDiscovered={howDiscovered}
            oneLinerDescription={oneLinerDescription}
          />
          )
        })}
    </div>

  );

};



const BooksList = [
  {
    title:"Think Like a Monk",
    writer:"Jay Shetty",
    pages:"320",
    pict:require("../../images/Books/thinklikeamonk.jpeg"),
    shortSummary:"",
    quotes:[
      '"The researchers said monk had the brain of someone ten years younger"',
      '"Become an objective observer/ Monks lead with awareness"',
      '"Researchers have found that happy people tend to complain mindfully. "',
      '"Spot stop swap: awareness addressing amending"',
      '"Saying whatever, whenever, however we want are not freedom. Real freedom is not feeling the need to say these things."',
      '"We may never completely purge ourselves of envy, jealousy, free, lust anger, pride, an illusio, but that doesnt mean we should ever stop trying."',
      '"When doing judgement observation, must be a thoughtful observations"',
      '"We cant stop our parents from dying, but we use the fear to remind us to spend more time with them."',
      '"We all have different goals, but we all want the same things: a life full of joy and meaning"',
      '"Dig to the deepest why behind the want"',
      '"A monk is a traveler, but the journey is inward, bringing us ever closer to our most authentic confident powerful self"',
      '"if others dont think you are effective, then your passion is a hobby, which can add richness to your life"'

    ],
    howDiscovered:"Been following Jay Shetty since high school",
    oneLinerDescription:"Someone who wants to remain mentally calm while chasing capitalism goal",
},
  // {
  // title:"Atomic Habits",
  // writer:"James Clear",
  // pages:"320",
  // pict:require("../../images/Books/AtomicHabits.jpeg"),
  // shortSummary:"",
  // quotes:[],
  // howDiscovered:"Everybody says it's good, very basic",
  // oneLinerDescription:"A good book for someone who wants to build consistency and find it hard to start and stick consistently to a habit, for ultimately achieving goal",

  // },
  // {
  // title:"You Do You",
  // writer:"Fellexandro Ruby",
  // pages:"320",
  // pict:require("../../images/Books/youdoyou.jpeg"),
  // shortSummary:"This books is in Indonesian Language",
  // quotes:[],
  // howDiscovered:"I was lucky to ask the writer himself to bring the book when he visited Singapore, signed it on the spot. I've been listening to his podcast, Thirty days of Lunch for the past 4 years.",
  // oneLinerDescription:"The book is in Indonesian language, a good book to start discovering your inner self and becoming a continuous learner",
  // },
  {
    title:"Good to Great",
    writer:"Jim Collins",
    pages:"320",
    pict:require("../../images/Books/goodtogreat.jpeg"),
    shortSummary:"",
    quotes:[
      '"The world is changing and will continue to do so. But that does not mean we should stop the search for TIMELESS PRINCIPLES."',
      '"The practice of engineering continually evolve and change, but the laws of physics remain relatively fixed"',
      '"A key trait of lv 5 leader: ambition first and foremost for the company and concern for its success rather than for one’s own riches and personal renown."',
      // '"Look for situations where extraordinary results exist but where no individual steps forth to claim excess credit, U Will find a potential lv 5 leader at work."',
      '"The good to great leaders understood three simple truth: Who are the right people What can be easier later"',
      '"The right people dont need tightly managed or fired up, they will be self-motivated by the inner driven to produce the best results and to be the part of creating something great"',
      '"The best people dont need to be managed. But guided, taught,led"',
      '"Put your best people on your biggest opportunities, not your biggest problem"',
      // '"Start with an honest and diligent effort to determine the truth of the situation, the right decisions often become self-evident. You absolutely cannot make a series of good decision without fist confronting the BRUTAL FACTS"',
      '"Built a climate where brutal truth is heard by leading discussion with questions not answer, having humility, engage in dialogue and debate, conduct autoapasies without blame"',
      // '"Confront the brutal facts of your current reality and retain unwavering faith that you will prevail in the end -- the Stockdale Paradox"',
      '"Hedgehog understand that THE ESSENCE OF PROFOUND INSIGHT IS SIMPLICITY"',
      // '"hedgehog arent simpletons, they have a piercing insight that allows them to see through COMPLETIXITY AND DISERCNE UNDERLYING PATRTERNS."',
      '"Buildup to breakthrough required disciplined people with disciplined thought then disciplined action"',
      '"EVERYONE WOULD LIKE TO BE THE BEST BUT MOST ORGS LACK THE DISCIPLINE TO FIGURE OUT WITH EGOLESS CLARITY WHAT THEYT CAN BE THE BEST AT AND THE WILL TO DO WHATEVER IT TAKES TO TURN THAT POTENTIAL INTO REALITY. THEY LACK THE DISCIPLINE TO RINSE THEIR COTTAGE CHEESE"',
      '"Indeed a great company is much more likely to die of indigestion from too much opportunity than starvation from too little."',
      '"Start a stop doing list, it is as important as to do list"',
      '"Tech bubbles comes and go, and the best one will adapt again"',
      '"Technology when used right becomes an accelerator of momentum not a creator of it"',
      '"Crawl, walk,run can be a very effective approach during times of rapid and radical technological change"',
      '"Breakthrough transition: From the outside they look like dramatic, almost revolutionary breakthrough. But from the inside, they feel completely different, more like an organic development process/evolution."',
      '"Remember it’s easier to become great than remain great"'


    ],
    howDiscovered:"Was playing secret santa games and I asked for this give. Kudos to Stanford, my secret Santa",
    oneLinerDescription:"Entrepreneurs, intrapreneurs, students, or whoever who wants to create a meaningful and longlasting projects, putting projects over self-ego",


    },
  // {
  //     title:"Measure What Matters",
  //     writer:"John Doerr",
  //     pict:require("../../images/Books/MeasureWhatMatters.jpeg"),
  //     shortSummary:"",
  //     quotes:[],
  //     howDiscovered:"My fellow SUTD and Canisius senior, Jeremia , was cleaning up his book collections.",
  //     oneLinerDescription:"Guide to track team productivity and target",
  //     },
  {
        title:"The Lean Startup",
        writer:"Eric Ries",
        pict:require("../../images/Books/theleanstartup.jpeg"),
        shortSummary:"",
        quotes:[
          '"Wrong way of just do it: avoiding all forms of management, process, and discipline"',
          '"The goal of a startup is to figure out the right thing to build,The thing that customers want and will pay for"',
          '"Throughout the process of driving, u should always have a clear idea of where you are going"',
          '"We must learn what customers really want, not what they say they want or what we think they should want. We must discover whether we are on a path that will lead to growing a sustainable business"',
          '"The question is not can this product be built? But should this product be built.Can we built a sustainable business around this set of products and services"',
          '"Some startups struggly to answer this: Which customer opinions should we listen to if any"',
          '"Any experiment : Think big, start small"',
          '"Most difficult questions, whether to stop or persevere"',
          '"How many people signup today and come back tomorrow?"',
          '"If too much analysis is dangerous but none can leaed to failure, how do entrepreneurs know when to stop analyzing and start building. The answer is called the mvp"',
          '"Why mvp? Because customers dont care how much time something takes to build. They care only if it serves their needs"',
          '"Sustainable growth follows one of three engines of growth: paid,viral,or sticky"',
          '"The lean startup works only if we are able to build an organisation as adaptable and fast as the challenges it faces"',
          '"The most important discoveries of the lean manufacturing movement: u cannot trade quality for time"',
          '"Be tolerant of all mistakes the first time, never allow twice"',
          '"Structure is merely a prerequisite, it does not guarantee success. But gettting the structure wrong can lead to almost certain failure"',
          '"We would respond to failures and setbacks with honesty and learning, not with recriminations and blame."',
          '"IF learning hsa taken place in one iteration cycle, let us demonstrate it by turning it into validated learning in the next cycle"',
          '"The capability of handling situation when the growth engine run out, a rapid an often unexpected changes, is considered as an adaptive organization"'
        ],
        howDiscovered:"Crashed into my friend's dorm at NUS, Radian, borrowed the book and never returned",
        oneLinerDescription:"Advice to build a startup with enough planning for MVP, and continuously improve from there",
    },
  //   {
  //     title:"Zero to One",
  //     writer:"Peter Thiel",
  //     pict:require("../../images/Books/zerotoone.png"),
  //     shortSummary:"",
  //     quotes:[],
  //     howDiscovered:"Crashed into my friend at NUS, Kevin, borrowed the book and never returned",
  //     oneLinerDescription:"aaaa lazy man",
  // },
//   {
//     title:"High Hanging Fruit",
//     writer:"(Mark Rampolla)",
//     pict:require("../../images/Books/highHangingFruit.jpeg"),
//     shortSummary:"",
//     quotes:[],
//     howDiscovered:"Discounted at Big Bad Wolf Books Festival",
//     oneLinerDescription:"",
// },
// {
//   title:"The Snapchat Story",
//   writer:"Billy Galagher",
//   pict:require("../../images/Books/TheSnapchatStory.jpeg"),
//   shortSummary:"",
//   quotes:[],
//   howDiscovered:"Discounted at Big Bad Wolf Books Festival",
//   oneLinerDescription:"Fratboy turned Hustler",
// },
  
]



