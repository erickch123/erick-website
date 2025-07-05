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
      '"A key trait of lv 5 leader: ambition first and foremost for the company and concern for its success rather than for one\'s own riches and personal renown."',
      '"Look for situations where extraordinary results exist but where no individual steps forth to claim excess credit, U Will find a potential lv 5 leader at work."',
      '"The good to great leaders understood three simple truth: Who are the right people What can be easier later"',
      '"The right people dont need tightly managed or fired up, they will be self-motivated by the inner driven to produce the best results and to be the part of creating something great"',
      '"The best people dont need to be managed. But guided, taught,led"',
      '"Put your best people on your biggest opportunities, not your biggest problem"',
      '"Start with an honest and diligent effort to determine the truth of the situation, the right decisions often become self-evident. You absolutely cannot make a series of good decision without fist confronting the BRUTAL FACTS"',
      '"Built a climate where brutal truth is heard by leading discussion with questions not answer, having humility, engage in dialogue and debate, conduct autoapasies without blame"',
      '"Confront the brutal facts of your current reality and retain unwavering faith that you will prevail in the end -- the Stockdale Paradox"',
      '"Hedgehog understand that THE ESSENCE OF PROFOUND INSIGHT IS SIMPLICITY"',
      '"hedgehog arent simpletons, they have a piercing insight that allows them to see through COMPLETIXITY AND DISERCNE UNDERLYING PATRTERNS."',
      '"Buildup to breakthrough required disciplined people with disciplined thought then disciplined action"',
      '"EVERYONE WOULD LIKE TO BE THE BEST BUT MOST ORGS LACK THE DISCIPLINE TO FIGURE OUT WITH EGOLESS CLARITY WHAT THEYT CAN BE THE BEST AT AND THE WILL TO DO WHATEVER IT TAKES TO TURN THAT POTENTIAL INTO REALITY. THEY LACK THE DISCIPLINE TO RINSE THEIR COTTAGE CHEESE"',
      '"Indeed a great company is much more likely to die of indigestion from too much opportunity than starvation from too little."',
      '"Start a stop doing list, it is as important as to do list"',
      '"Tech bubbles comes and go, and the best one will adapt again"',
      '"Technology when used right becomes an accelerator of momentum not a creator of it"',
      '"Crawl, walk,run can be a very effective approach during times of rapid and radical technological change"',
      '"Breakthrough transition: From the outside they look like dramatic, almost revolutionary breakthrough. But from the inside, they feel completely different, more like an organic development process/evolution."',
      '"Remember it\'s easier to become great than remain great"'


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

    {
      title:"The Art of Thinking Clearly",
      writer:"Rolf Dobelli",
      pages:"320",
      pict:require("../../images/Books/theartofthinkingclearly.jpeg"),
      shortSummary:"",
      quotes:[
        '"The danger of losing something stimulates us much more than the prospect of making a similar gain."',
        '"In the presence of other people we tend to adjust our behaviour to theirs, not the opposite."',
        '"Social proof is the evil behind bubbles and stock market panic."',
        '"The contrast effect. A product that has been reduced to $70 from $100 dollar seems to be better value than a product that has always cost $70"',    
        '"Stories are dubious entititute because they simplify reality and filter things that dont fit. PEOPLE USED STORIES to explain the world before they began to think scientifically. This handled to story bias"',    
        '"THe hindsight bias is one of the most prevailing fallacies of all. We can aptly describe it as the I told you so phenomenon"',  
        '"Aiming for perfect decision given the flood of possibilities is a form of irrational perfectionism. Good enough is the new optimum"',    
        '"The more similar it is to us, the more we like it. Such as similar background, appearance, or attractiveness"',    
        '"The disappointment can be much bigger when you failed the final stage instead of the first stage so dont cling to things"',
        '"Survivorship bias is one of the causes for their base-rate neglect. They tend to see only the successful individuals and companies, because the unsuccessful cases are not reported or under reported, makes them neglect the large part of the invisible cases."',
        '"Halo effect: we often ascribe success and superiority where little is due, such as when we favour products from a manufacture simply because of its good reputation. Or we believe that CEOs who are successful in one industry can thrive in any sector and including the private llives too"',
        '"There are two kinds of forecasters those who dont know and those who dont know they dont know. The ore complex a system and the longer the time frame, the more blurred the view of the future will be"',
        '"Framing and glossing: people will choose 99% fat free instead of 1% fat although both are the same"',
        '"We often attribute success yo ourselves and failures to external factors. This is the self-serving bias"',
        '"suppose you apply for a job and discover you have lost out to another candidate. Instead of admitting that the other person was better suited, you convince yourself that you didnt want the job in the first place, you simply wanted to test your market value and see if you could get invited for interview"',
        '"The capacity for delayed gratification is a reliable indicator of future career success. Patient is indeed a virtue"',
        '"When you justify your behaviour you encounter more tolerance and helpfulness. It seems to matter very little if your excuse is good or not. Using the simple validation because is sufficient"',
        '"Simple way of increasing the average pool. Let\'s say Fund A has sensational returns, fund B has mediocre returns. How to increase both percentage without efforts are selling stocks that are the worst in Fund A and allocate it to fund B. Both Funds will have increase in ROI"',
        '"Effort justification: like Ikea furniture that the one we assemble ourselves feel more valuable compared to expensive designer furnitures"',
        '"Sleeper effect: the source of the argument fades faster than the argument. Which often being misused especially during US election campaign"',
        '"TO avoid hasty judgement you must learn to tolerate ambiguity"',
        '"the planning fallacy is particularly evident when people work together. Groups overestimate duration and benefits and systematically underestimate costs and risks"',
        '"Absence is harder to detect than presence because we put much emphasis on what is present rather than what is absent. For example a brand that promoting a product and list down all the good vitamins while not showing the fat content. We rarely think about being sick when healthy, we realise the war but did not appreciate the absence of war"',
        '"Statistically, companies with debt on their balance sheets are significantly more profitable than firms with no debt/ equity only"',
        '"Conjunction fallacy. For example A worked several years in social services, Red Cross etc. Graduated from MBA then check what is more likely. Whether Chris works for a major bank or B) works for a major bank where he runs its Third World Foundation. Most people will say B, but actually option A is more likely"'
      ],
      howDiscovered:"From a venture capitalist podcast this book is great for a decision making.",
      oneLinerDescription:"A comprehensive guide to cognitive biases and logical fallacies that affect our decision-making, helping readers think more clearly and make better choices.",
  },
  {
    title:"How I Built This",
    writer:"Guy Raz",
    pages:"320",
    pict:require("../../images/Books/howIbuiltthis.jpg"),
    shortSummary:"",
    quotes:[
      '"There is a name for a person who creates something purely out of passion: hobbyist. There is a name for a person who creates something out of passion that solves a problem only they have: tinkerer. There is a name for person who creates something out of passion that also solves a problem they share with lots of other people: entrepreneur"',
      '"To lose our own money or own fat, but when you are taking money from people you really cared about, you dont want to let them down"',
      '"It is really important to spend enough time in the first phase to really get comfortable with your product and your story, and really get to know the business you are trying to build. and Tim\'s all bird spent 5 years with it"',
      '"More often that not, the success of a new business depends on its ability to get attention. specifically its ability to build buzz and to engineer word of mouth"',
      '"ask people to market might be better than market yourself"',
      '"Nothing influences people more than a recommendation from a trusted friend"',
      '"Sometimes the problem are not the idea, but the execution. For example, no one will like airbnb when customers are posting shit pictures"',
      '"It\'s important to manage any significant tension with your cofounder properly. If it gets bad enough, it can cause your employees to question everything they are working towards. As a founder you must squash petty power plays and your ego"',
      '"all founders will find themselves with a choice between two competing interest— money and control they will often choose poorly. They will act either against their own self interest or in some instances, against the best interests of their companies"',
      '"The whole world runs on luck, the question is what you do with it. What you do while you have it determines whether you success or you fail or you even try"',
      '"To a person, all of these entrepreneurs will tell you that fundraising is brutally hard at every level. It taxes your time, energy, ego, and sometimes relationship. You will have tell the story hundreds of times and answer ten times as many questions, a lot of them the same, some of them incredible frustrating especially from people you think are supposed to support your or whom you have always called a friend."',
      '"You are going to need a thick skin"',
      '"Once you have convinced people in your personal network to part with their money in support of your idea, that\'s when the pressure to succeed really begins Understandably, some entrepreneurs dont like that kind of pressure."'
    ],
    howDiscovered:"From the popular  podcast of the same name, exploring the stories behind successful companies and entrepreneurs.",
    oneLinerDescription:"Insights from successful entrepreneurs on building businesses, managing cofounder relationships, fundraising challenges, and the journey from idea to execution.",
  },

  //   {
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
  
  {
    title:"The 7 Habits of Highly Effective People",
    writer:"Stephen R. Covey",
    pages:"432",
    pict:require("../../images/Books/7HabitsOfHighlyEffectivePeople.jpeg"),
    shortSummary:"",
    quotes:[
      '"It was not the luck of being at the right moment in history that separated Bill Gates, but his proactive response to being at the right moment"',
      '"If ten seconds impressions can have that kind of impact on the way we see things, how about the conditioning of a lifetime?"',
      '"While practices are situationally specific, principles are deep, fundamental truths that have universal application"',
      '"We will define a habit as the intersection of knowledge skill and desire"',
      '"reactive people build their emotional lives around the behaviour of others, empowering the weaknesses of other people to control them. Proactive people are driven by values carefully thought about, selected, and internalised values"',
      '"Being proactive comes down to two things: First take responsibility for your life and second take initiative. Be an agent not a victim. Be the driver of your life not a passenger. live out of your imagination not your past"',
      '"To begin with the end in mind means to start with a clear understanding of your destination. It means to know where you are going so that you better understand where you are now and so that the steps you take are always in the right direction"',
      '"its incredibly easy to get caught up in an activity trap in the busyness of life, to work harder and harder at climbing the ladder of success only to discover it\'s leaning against the wrong wall"',
      '"We may be very busy, we may be very efficient but we will also be truly effective when we begin with the end in mind"',
      '"Identify your Core paradigm centeredness: spouse centeredness, Family centeredness, money centeredness, possession centeredness, pleasure centeredness, friend/enemy centeredness, religion centered, self centeredness"',
      '"Creating an organisational mission statement requires time patience involvement skill and empathy. It takes time courage, statement to align systems, structure, management styles to the shared vision and values"',
      '"Habit 3 must be preceded with habit 1 and 2. You cant become principle centred without first being aware of your paradigm and understanding how to shift them and align them with principles. You cant become principle centred without a vision and a focus on the unique contribution that is yours to make"',
      '"True effectiveness required balance. Many people seems to think that success in one area can compensate failure in other areas of life, but it can only for limited time"',
      '"Emotional bank account: When the trust account is high, communication is easy instant and effective. Even when making mistakes, the emotional reserve can compensate for it"',
      '"Understanding the individual, attending to the little things, keeping commitments, clarifying expectations, showing personal integrity, apologising sincerely"',
      '"Dag Hammarskjold, it is more noble to give urself completely to one individual than to labor diligently for the salvation of the masses"',
      '"Change relationship from transactional to transformational"',
      '"public victory need win/win negotiation or reflective listening or creative problem solving that focus on personality and truncate the vital character base"',
      '"anything less than win win solution is not a solution in the long run, either win win or no deal"',
      '"integrity, maturity, and abundance mentality"',
      '"Without trust the best we can do is compromise. Without trust, we lack the credibility for open, mutual learning, communication, and real creativity"',
      '"Integrity is a higher value than loyalty. It means being integrated or centred with own principles not on people organizations or even family"'
    ],
    howDiscovered:"Classic personal development book recommended by many successful people and business leaders.",
    oneLinerDescription:"A comprehensive guide to personal effectiveness through seven fundamental habits that transform character and relationships, from dependence to independence to interdependence.",
  },
  {
    title:"Thinking, Fast and Slow",
    writer:"Daniel Kahneman",
    pages:"499",
    pict:require("../../images/Books/thinking-fast-and-slow.jpg"),
    shortSummary:"",
    quotes:[
      '"As we navigate our lives, we normally allow ourselves to be guided by impressions and feelings, and the confidence we have in our intuitive beliefs and preferences is usually justified"',
      '"We are often confident even when we are wrong, and an objective observer is more likely to detect our errors than we are. So improve the ability to identify and understand errors of judgment and choice in others and eventually ourselves"',
      '"We observed systematic biases in our own decisions, intuitive preferences that consistently violated the rules of rational choice"',
      '"The spontaneous search for an intuitive solution sometimes fails — neither an expert solution nor a heuristic answer come to mind. In such cases we often find ourselves switching to a slower, more deliberate and effortful form of thinking. This is the slow thinking of the title. Fast thinking includes both variants of intuitive thoughts — the expert and the heuristic"',
      '"System brain1: operates automatically and quickly with little or no effort"',
      '"System 2 allocates attention to the effortful mental activities that demand it including complex computations"',
      '"As u become skilled in a task its demand for energy diminishes. Studies of the brain have shown that the pattern of activity associated with an action changes as skill increases, with fewer brain regions involved."'
    ],
    howDiscovered:"Nobel Prize-winning book on behavioral economics and cognitive psychology, widely recommended in business and psychology circles.",
    oneLinerDescription:"Explores the two systems of thinking - fast, intuitive System 1 and slow, deliberate System 2 - and how cognitive biases affect our decision-making.",
  },

  {
    title:"Talk Like TED",
    writer:"Carmine Gallo",
    pages:"288",
    pict:require("../../images/Books/talkliketed.jpeg"),
    shortSummary:"",
    quotes:[
      '"There is nothing more inspiring than a bold idea delivered by a great speaker"',
      '"Ideas are the currency of the twenty first century"',
      '"Ideas, effectively packaged and delivered, can change the world"',
      '"Ted is where brilliant people go to hear other brilliant people share their ideas"',
      '"Dont let the noise of others opinion drown out your own inner voice. And have the courage to follow your heart and intuition"',
      '"IF u cant inspire anyone else with your ideas it won\'t matter how great those ideas are"',
      '"Ideas are only good as the actions that follow the communication of those ideas"',
      '"Three main parts of impactful TED talk: Emotional, novel, and memorable"',
      '"Motivated and energised speakers are always more interesting and engaging than bored and passive ones"',
      '"You need data, facts, and analysis to challenge people, but also narrative to get people to be comfortable enough to care about the community that you are advocating for"',
      '"You have to get folks to trust you. if you start with something too esoteric and disconnected from the lives of everyday people, its harder for people to engage"',
      '"We tend to agree with people we respect for their achievements, title, and experience"',
      '"The ability to tell a personal story is an essential trait of authentic leadership"',
      '"It takes hard work to make things look incredibly easy"',
      '"People dont know what they want, if they do, they have a hard time articulating what they actually desire"',
      '"Statistic to make people shock. one in a hundred regular people is a psychopath. Theres 1500 people in this room, so 15 of you are psychopath."',
      '"You are more likely to remember events that arouse your emotions than events that elicit a neutral response"',
      '"The jaw dropping moment in a presentation is when the presenter delivers a shocking impressive or surprising moment that is so moving and memorable, that grabs the people attention and is remembered when the presentation is over"',
      '"Always think about one big idea that your listener need to take away after your presentation"',
      '"Audience love to hear about new and love ways to solve problem. If they teach you something new and valuable, there\'s a good chance other people will want to hear about it"',
      '"Successful presentations reveal ideas you\'d never considered"',
      '"There\'s zero correlation between being the best talker and having the best ideas"',
      '"Combine humour and novelty that your presentation will be gold. Humor lower defences, making your audience more receptive to your message"',
      '"IF American wants to have American dream, they should go to Denmark"',
      '"Rose George blending 3 powerful formulas: humour, shock, and statistics"',
      '"Humor involve some risk and most people dont have the courage to do it, that why most business presentation are dry"',
      '"Listening is an exhausting activity because the earner is continually adding material to be remembered but retrieved later. This is a cognitive backlog"',
      '"You have to really be courageous about your instinct and your ideas. Otherwise you\'ll just knuckle under and things that might have been memorable will be lost."',
      '"Cognitive backlog prevents the successful transition of ideas"',
      '"Stand up as one, because the power of people is stronger than the people of power"',
      '"THe holy grail of a presentation is to transport the audience to another place"',
      '"You dont need to luck to be an inspiring speaker. You need examples techniques, passion and practice, courage to articulate your ideas simply, and express what makes your heart sing"'
    ],
    howDiscovered:"Recommended book for improving public speaking and presentation skills, especially for TED-style talks.",
    oneLinerDescription:"A comprehensive guide to delivering powerful presentations by combining emotional storytelling, novel ideas, and memorable delivery techniques that inspire and engage audiences.",
  },
 
   // Book title:7 HABIts of highly effective people
  {
    title:"Zero to One",
    writer:"Peter Thiel",
    pages:"224",
    pict:require("../../images/Books/zerotoone.png"),
    shortSummary:"",
    quotes:[
      '"The first step to thinking clearly is to question what we think we know about the past"',
      '"Small incremental steps are the only safe path forward. Instead, you should try things out, iterate, and treat entrepreneurship as agnostic experimentation"',
      '"IF your product requires advertising or salespeople to sell it, it\'s not good enough"',
      '"A bad plan is better than no plan"',
      '"What valuable company is nobody building? Creating a value is not enough, you also need to capture some of the value you create"',
      '"non monopolists exaggerate their distinction by defining their market as the intersection of various smaller markets. monopolists by contract disguise their monopoly by framing their market as the union of several large markets"',
      '"Monopoly is the condition of every successful business. All failed companies are the same, they failed to escape competition"',
      '"Oracle intentionally accumulated enemies. Ellison\'s theory is that its always good to have an enemy as long as it is large enough to appear threatening but not so large as to actually threaten the company"',
      '"For a company to be valuable it must grow and endure, but many entrepreneurs focus only on short term growth. GROWTH IS EASY to measure but DURABILITY ISNT. Will this business still be around in 10 years"',
      '"The perfect target market for a startup is a small group of particular people concentrated together and served by few or no competitors"',
      '"its much better to be the last mover. They way to do it is to dominate a small niche and scale up from there."',
      '"You should focus relentlessly on something you are good at doing but before that you must think hard about whether it will be valuable in the future."',
      '"If you overachieve and end up learning something thats not on the test, you won\'t receive credit for it"',
      '"what are people running companies not allowed to say? you would notice that monopolists downplay their monopoly status to avoid scrutiny while competitive firms strategically exaggerate their uniqueness"',
      '"Power law becomes visible when you follow the money. Entire funds usually have a 10 year lifespan. Later on, A small handful of companies radically outperform all others."',
      '"Every great business is built around a secret thats hidden from the outside. A great company is a conspiracy to change the world."',
      '"You need good people who get along, but you also need a structure to keep everyone align for the long term"',
      '"In theory division works smoothly, but it also multiply opportunities for misalignment"',
      '"Most conflicts in a startup erupt between ownership and control, especially between founders and investors"',
      '"Sales works best when hidden. Especially for high value deal, client dont want to meet the salesperson, they want to meet the CEO"',
      '"If you have invented something new but haven\'t invented an effective way to sell it, you have a bad business no matter how good the product"',
      '"Customer lifetime value must exceed the amount you spend on average to customer acquisition cost"',
      '"You should never assume that people will admire your company without a public relations strategy. The press can help attract investors and employees. Any prospective employee worth hiring will do his own due diligence."',
      '"Selling your company to the media is a necessary part of selling it to everyone else. Your company needs to sell more than its product"',
      '"The most valuable business of coming decades will be built by entrepreneurs who seek to empower people rather than to make them obsolete"',
      '"Social entrepreneurs aim to combine the best of both worlds and do well by doing good. Usually they end up doing neither"',
      '"A great founder can bring out the best work from everybody at his company"'
    ],
    howDiscovered:"Crashed into my friend at NUS, Kevin, borrowed the book and never returned",
    oneLinerDescription:"A contrarian guide to building startups that create unique value through monopolies, focusing on secrets, long-term thinking, and building companies that go from zero to one rather than copying existing models.",
  },
]



