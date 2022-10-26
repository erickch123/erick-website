import FullBlock from "./FullBlock";
export default function LeadershipBlock() {
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
const SUTDDetails = [
    {
        title: "Professional Development Director of SUTD Rotaract(Community Service and Volunteering)",
        description: "I have conducted and emceed three webinars consists of Technopreneurship Forum: “Women in Tech for a Greater Cause”, Sustainable Entrepreneurship Talk: ”Tackling Food Waste”, and Tech Career Talk: The Future of Working in Engineering",
        contribution: "Through this position, I have learned how to reached out to potential speakers and mentors in networking events, actively interacting in other webinars/talks, writting better cold emails. Moreover, I also voluntarily participated in other Rotaract events such as Nightwalk with Homeless and Migrant Workers, simply because I love to hear about people stories and do small things since I can't do something great"
    },
    {
        title: "President of SUTD Basketball",
        description: "Administered all cooperations with other basketball clubs, external parties, Internal Student Government, and played in the basketball team for Singapore University Games (SUniG) 2022. Technically speaking, leading the team other than training",
        contribution: ""
    },
    {
        title: "Quartermaster of SUTD Photography Club ",
        description: "Ensured updated logs list of photography equipment and organize the equipment loaning system and led two the photowalk at Marina Barrage and Tiong Bahru. Definitely, I was the one who borrowed the equipments the most and you can find some of my photos in the photography section 😊. ",
        contribution:""
    
    },
    {
        title: "Treasurer of PADI (Indonesian Community Club in SUTD)",
        description: "Raised fund by selling 400 Batik Masks with a profit of $1200. Frankly, I did nothing else other than that",
        contribution:""
    
    },
    
]
const OutsideSutdDetails = [
    {
        title: "Public Relation of Indonesian Students Association in Singapore",
        description: " Emceed in three of the Grebek Kampus (Campus Tour) Youtube series regarding Indonesians students life in Singapore, specifically I was in NTU,SMU, and NAFA's videos . I also led a physical bonding session with the Indonesian Student's Community from 9 different universities in Singapore. It was quite challenging because of the pandemic",
        contribution: "After one year, I joined the Tech Team, which is explained in the coding session"
    },
]

const OtherDuringUniDetails = [
    {
        title: "STEP Asian Undergraduate Summit by NUS Scholars and Lee Kuan Yew School of Public Policy",
        description: "Grouped with friends from 6 different SEA countries and won first place for the best idea in Future Thinking Problem Solving, Freshwater in SEA Rural Area. The event would be even better if it was online though. In the following year, I became the facilitator but was online as well walao",
        contribution: ""
    },
    {
        title: "Orientation Group Leader for SUTD Class of 2025 and 2026",
        description: "Led the bonding sessions between the new students and shared relevant experiences as a mentor. The one for Class of 2026 was more interesting and easier since the covid restriction was relaxed and there was a lit party night on the last day",
        contribution: ""
    },
    {
        title: "Mission X by Youth Corps Singapore",
        description: "I participated because I wanted to know more about the volunteering scenes in Singapore compared to my hometown Jakarta. I learned that it is easier to do more hands-on actions here compared to Indo in most aspects such as society, safety, transparency, and government funds. I was also featured in their LinkedIn Post if you are interested to see.",
        contribution: ""
    },
    {
        title: "Youth Ecosperity Dialogue (Sustainability)",
        description: "The secondary reason I participated because I wanted to meet people from South East Asia who are interested in sustainability . At this point of writing I haven't created a dedicated website page for Sustainability so I will move this section to that page once it's finished. But the main reason is because it was funded by Temasek and they provided 6 days of meals and accommodations ✌️.",
        contribution: ""
    },
]

const InIndonesiaDetails = [
    {
        title: "Canisius College Senior High School",
        description: "During my senior year, I was involved in both Ignatian Leadership Training(Freshman Initiation) and Student Union Leadership Training. Moreover, I also became a Quiz Competition, Photography, and Finance Committees during Canisius College Cup (Sports and Arts Competition Across Jakarta) ",
        contribution: ""
    },
    {
        title: "Tarakanita 2 Junior High School",
        description: "I was once a sport committee in the Student Council and became the Secretary the next year. In my last year, I was the basketball captain.",
        contribution: ""
    },
]

const TitleLists = [
    {
        header: "SUTD Extracurriculars",
        detailsName: SUTDDetails,
        logo:require("../images/sutd.png"),
    },
    {
        header: "Extracurriculars Outside of SUTD",
        detailsName: OutsideSutdDetails,
        logo:require("../images/ppis.png"),
    },
    {
        header: "Other Events During Uni",
        detailsName: OtherDuringUniDetails,
        logo:require("../images/events.png"),
    },

    {
        header: "Back in Jakarta",
        detailsName: InIndonesiaDetails,
        logo:require("../images/tutuwurihandayani.png"),
    },
    
   

]