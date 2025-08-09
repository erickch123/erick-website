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
        title: "Combining Tech and Venture Capital",
        description: "As someone with computer science background and working in tech, I've always been fascinated by the intersection of technology and investment thinking. While developing my coding skills in software engineering, data engineering, and AI, I am also interesting in learning  how investors evaluate tech innovations. Even during university, I pursued VC-related training as a side quest. Although coding remained my primary focus, I wanted to maximise my knowledge in the VC space.",
        contribution: "Now, as I've matured professionally and begun accumulating wealth through my tech career, I'm increasingly drawn to participating in the venture capital space. My technical background gives me unique insights into evaluating startups, while my investor mindset helps me identify promising ideas and learn from other entrepreneurs."
    },
]
const VentureCapitalDetails = [
    {
        title: "Portfolio: Fintech Market and Trend Analysis, FOMOPay Investment Memo and Due Diligence",
        description: " Portfolio submission during EntryLevel Venture Capital Analyst Course, where I independently chose one industry I am interested in and three early stage companies that I would analyse.",
        contribution: " Throughout the program I chose Fintech Industry and FOMOpay, JiPay, and iPiD. Eventually, I chose FOMOpay as the top priority for the investment portfolio. I have conducted due diligence, investment memo, market analysis, customer analysis, dealflow action plan, and PitchDeck reviews. If you are a VC and interested to see, kindly contact me via Linkedin/Email!"
    },
    {
        title: "Protege Venture Academy",
        description: "Earned a position at Protege Venture, a student-run program, through a multi-stage selection process designed to nurture venture capital talent in university. Successfully completed the 2-month program phase, acquiring knowledge in VC industry practices, due diligence frameworks, and investment memo preparation. Key accomplishments included developing a pitch deck presentation for Datature and establishing valuable industry connections. Did not continue with the subsequent 1-year analyst program.",
        contribution: ""
    },
    {
        title: "My Personal Startup Notes",
        description: "Collated information of 300 startups(as of Aug 2025) since my last year of High School whose I personally interested from daily reading/podcast about startup, technology, and leadership from Techcrunch, e27, TechInAsia, DailySocial, VulcanPost, MorningBrew, BFM, MyFirstMillion. In this case, I am interested with their ideas and not focusing on their business model,scalability, or profitability. They are located in Indonesia, Singapore, US, other Southeast Asia Countries, and Sweden. It's a spreadsheet that people can just see",
        contribution: "",
        link: "https://docs.google.com/spreadsheets/d/1cJd9A_k8HBuU88sv77a89Vvo-lmbfY0xJzJ8caMQYa0/edit?usp=sharing"
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