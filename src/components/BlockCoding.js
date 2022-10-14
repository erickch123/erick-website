export default function BlockCodingHeader() {

    return (
        <section>

            {TitleLists.map((detail)=>{
                const{header,detailsName}=detail;
                return(
                    <FullBlock
                        header = {header}
                        detailsName={detailsName}
                    />
                )
                
            })}
           
        </section>

    )
}

const ProjectDetails = [
    {
        title: "Website: Ascenda Loyalty Program Marketplace",
        description: "Ascenda Loyalty operates an API based Loyalty Points Marketplace which facilitates easy and seamless loyalty currency transfers between multiple loyalty programs. Customers of our loyalty points marketplace product are typically loyalty programs that want to offer their customers abilities toconvert their own loyalty currency to a variety of other third party loyalty currencies.You will be able to find many examples of such loyalty programs locally here in Singapore. Forexample, GrabRewards, which is a loyalty program for Grab, offers the ability for one to convert Grabpoints to airline currencies, such as Singapore Airlines KrisFlyer or AirAsia Big.",
        contribution: "In this project, my contribution is heavily on backend site with only one frontend feature"
    },
    {
        title: "Android App Developments : Smart Canteen @SUTD",
        description: " An easy-to-use mobile application which allows people to check what dishes are available today and whether the stalls are still open. By allowing users to indicate their interest in buying from the stall, the stall owners can in turn see how many people are expected to turn up. This is a win-win situation as students and guests can see what foods are available in the canteen without having to visit the canteen physically, while the stall owners can gauge how many batches of food to make and decrease food waste.",
        contribution: "Automated image uploading and storing system into Firebase Storage which also returned the cloud URL link that is passed to the Firebase Realtime Database. Moreover, I implemented the database management class where the added menu details and images can be automatically displayed inside the Frontend RecyclerView User Interface",
    },
    {
        title: "Machine Learning : Covid-19 Death Prediction",
        description: "",
        contribution: "Cleaned the World Covid-19 Data sourced from Kaggle with Pandas and Numpy• Built a Linear regression model with 90 percent accuracy against the number of total cases, total tests,vaccination rates, population, without implementing Scikit Library"
    },
]

const CompetitionDetails = [
    {
        title: "Third Place in DBS Bank Design and Artificial Intelligence Challenge",
        description: "Competition held by SUTD and DBS Bank to predict promising credit card",
        contribution: "Proposed a credit card to target young working adults aged 25-33 which has the highest tendency to acquire new credit cards based on the Machine Learning Training Model using Scikit Library"
    },

]
const OutsideProjectDetails = [
    {
        title: "PPIS Tech Team",
        description: "Indonesia Community in Singapore",
        contribution: "Constructed a new backup MySQL database and integrating it with Wix API to automate member application processes and removal of expired members’ dataImplementing new User Interface site with ReactJs  for membership info retrieval as a first step to migrate website from Wix to a new domain"
    },

]
const PersonalProjectDetails = [
    {
        title: "This Website",
        description: "As mentioned, this website is for me to showcase what I've done, not only in software engineering projects but my other hobbies as well",
        contribution: "The website is built with React js framework and Tailwind CSS"
    },
    {
        title: "Web Scraping",
        description: "Web Scraping",
        contribution: "My First ever attemp of coding project outside of school during my term 2 in university"
    },

]
const TitleLists = [
    {
        header: "Group Projects",
        detailsName: ProjectDetails,
    },
    {
        header: "Competitions",
        detailsName: CompetitionDetails,
    },
    {
        header: "Outside of Schools",
        detailsName: OutsideProjectDetails,
    },
    {
        header: "Personal Projects",
        detailsName: PersonalProjectDetails,
    },
]
function FullBlock(props) {
    const {
        header,
        detailsName
    } = props;


    return (
        <div className="container flex px-10 pt-20 md:flex-row flex-col-2 items-center ">
            <div className=" pl-20  w-[300px] shrink-0 lg:pr-24  mb-16  text-left">
                <h1 className="pb-10 text-4xl">
                    <b>{header}</b>
                </h1>
            </div>
            <div className=" ml-20 flex-col">
                {detailsName.map((project) => {
                    const { title, description, contribution } = project;
                    return (
                        <BlockCodingContent
                            title={title}
                            description={description}
                            contribution={contribution}
                        />
                    )
                })
                }
            </div>
        </div>
    )

};

function BlockCodingContent(props) {
    const {
        title,
        description,
        contribution,
    } = props


    return (
        <div className="pl-20 hover:bg-gray-200">
            <h1 className="text-left pb-10  text-4xl">
                <b>{title}</b>
            </h1>
            <p className="pb-10">
                {description}
            </p>
            <p className="pb-10">
                {contribution}
            </p>
        </div>


    );
}