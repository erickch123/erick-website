import FullBlock from "../Block/FullBlock";
export default function VentureCapitalBlock() {
    return (
        <section>
            <div>
                {TitleLists.map((detail) => {
                    const { header, detailsName,logo } = detail;
                    return (
                        <FullBlock
                            header={header}
                            detailsName={detailsName}
                            logo={logo}
                        />
                    )
                })}
            </div>
        </section>

    )
}
const MyThoughtsDetails = [
    {
        title: "No Experience and a Minority, then What?",
        description: "We always hear that VCs are from Finance backgrounds, ex-consultants, ex-bankers, ex-Founders, and interestingly I am not all. I am a university student studying computer science who also focuses one becoming a software engineer. However, I am also very interested to be involved in VC space due to my reading habits during free-time, which is explained in the below section. More importantly, I can show potential recruiter my commitment and the extra step I have taken through creating a portfolio.",
        contribution: "Getting into VC is also known as a connection game and people often stereotype computer science students as unfavourable. However, as an outgoing person, I have managed to make ample connections from various industries, including three VC analyst interns and one Partner in VC. Consciously, I know it is far than enough for me to get into VC, therefore I would be glad to make more connections and hope to intrigue VCs who are looking at my website."
    },
]
const VentureCapitalDetails = [
    {
        title: "Portfolio: Fintech Market and Trend Analysis, FOMOPay Investment Memo and Due Diligence",
        description: " Portfolio submission during EntryLevel Venture Capital Analyst Course, where I independently chose one industry I am interested in and three early stage companies that I would analyse.",
        contribution: " Throughout the program I chose Fintech Industry and FOMOpay, JiPay, and iPiD. Eventually, I chose FOMOpay as the top priority for the investment portfolio. I have conducted due diligence, investment memo, market analysis, customer analysis, dealflow action plan, and PitchDeck reviews. If you are a VC and interested to see, kindly contact me via Linkedin/Email!"
    },
    {
        title: "My Personal Startup Notes",
        description: "Collated information of 189 startups(as of October 2022) since my last year of High School whose I personally interested from daily reading/podcast about startup, technology, and leadership from Techcrunch, e27, TechInAsia, DailySocial, VulcanPost, MorningBrew, BFM, MyFirstMillion. In this case, I am interested with their ideas and not focusing on their business model,scalability, or profitability. They are located in Indonesia, Singapore, US, other Southeast Asia Countries, and Sweden. If you are a VC and interested to see, kindly contact me via Linkedin/Email!",
        contribution: "Recently, I have stopped listening to podcast due to other priorities, so I am only up to date with Startup news sources"
    },
]

const TitleLists = [
    {
        header: "My Thoughts on VC",
        detailsName: MyThoughtsDetails,
        logo:require("../../images/Commons/thoughts.png"),
    },
    {
        header: "Personal Project",
        detailsName: VentureCapitalDetails,
        logo:require("../../images/Commons/rocket.png"),
    },
   

]