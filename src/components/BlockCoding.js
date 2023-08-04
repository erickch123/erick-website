import BlockCodingContent from "./BlockCodingContent";
import FullBlock from "./FullBlock";
export default function BlockCodingHeader() {

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

const SoftwareProjectDetails = [
    {
        title: "Website: Ascenda Loyalty Program Marketplace",
        description: "Ascenda Loyalty operates an API based Loyalty Points Marketplace which facilitates easy and seamless loyalty currency transfers between multiple loyalty programs. Customers of our loyalty points marketplace product are typically loyalty programs that want to offer their customers abilities toconvert their own loyalty currency to a variety of other third party loyalty currencies. You will be able to find many examples of such loyalty programs locally here in Singapore. Forexample, GrabRewards, which is a loyalty program for Grab, offers the ability for one to convert Grabpoints to airline currencies, such as Singapore Airlines KrisFlyer or AirAsia Big.",
        contribution: "In this project, my contribution is heavily on backend site with only one frontend feature. I built the backend code infrastructure with Node.js, Express.js, and MongoDB database. I implemented CRUD endpoints for real time transaction features and automated uploading/ downloading process to/from SFTP Server, as well as unit testing with Jest Supertest Library."
    },
    {
        title: "Android App Developments : Smart Canteen @SUTD",
        description: " An easy-to-use mobile application which allows people to check what dishes are available today and whether the stalls are still open. By allowing users to indicate their interest in buying from the stall, the stall owners can in turn see how many people are expected to turn up. This is a win-win situation as students and guests can see what foods are available in the canteen without having to visit the canteen physically, while the stall owners can gauge how many batches of food to make and decrease food waste.",
        contribution: " I contributed in automating image uploading and storing system into Firebase Storage which also returned the cloud URL link that is passed to the Firebase Realtime Database. Moreover, I implemented the database management class where the added menu details and images can be automatically displayed inside the Frontend RecyclerView User Interface.",
    },

]
const DataProjectDetails = [
    {
        title: "Deep Learning Cancer Cell Classification",
        description: "Implemented transfer learning and finetuning training of Several Models such as Regnet, ResNet, VGG",
        contribution: "Won Best Project based on Kaggle Competition Rank at Uppsala University(my exchange university)"
    },
    {
        title: "Deep Learning MNIST and CNN Segmentation Project",
        description: "Performed classification of the MNIST dataset with PyTorch Deep Learning Library and reached 98 percent accuracy",
        contribution: "Segmented Warwick Biomedical Dataset to detect gland in the image by implementing fully convolutional network with 0.9 Macro F1 Score."
    },
    
    {
        title: "Machine Learning : Hate Speech Classification",
        description: "Final Project in Machine Learning Course to create the best model and compete with other groups.  ",
        contribution: "From the provided cleaned data with TF-IDF implementation, I tried to implement the best prediction model by exploring SVM, Random Forest, ExtraTree, XGBoost, and Adaboost Algorithms and eventually used SVM with self-customsied kernel function."
    },
    {
        title: "Machine Learning : Covid-19 Death Prediction",
        description: "Final Project in Data Driven World Course with two problem statements and we splitted among our group.",
        contribution: "In this project, I cleaned the World Covid-19 Data sourced from Kaggle with Pandas and Numpy Python Library and built a Linear regression model with 90 percent accuracy against the number of total cases, total tests, vaccination rates, population, without implementing Scikit Library."
    },
]

const CompetitionDetails = [
    {
        title: "Third Place in DBS Bank Design and Artificial Intelligence Challenge",
        description: "Competition held by SUTD and DBS Bank to predict a promising credit card.",
        contribution: "Proposed a credit card to target young working adults aged 25-33 which has the highest tendency to acquire new credit cards based on the several Machine Learning Training Models using Scikit Library"
    },
    {
        title: "PSA Hackathon CodeSprint 2022 ",
        description: " Proposed a solution for 1 out of 10 problem statements, which is to develop a means to track and ensure port users travel only to the designated locations and leave the port once their jobs have been completed.",
        contribution: "We built a website with MERN (MongoDb, Express, Node, React) stack and Twilio that consist of security dashboard and internal form submission that is integrated with Whatsapp Messaging."
    },

]
const OutsideProjectDetails = [
    {
        title: "PPIS Tech Team",
        description: "Tech Team subdivision in Indonesia Community in Singapore, focusing in Backend",
        contribution: "I have learnt about Wix API and Database and implemented features to automate member application processes and removal of expired members. I also had a slight contribute in Frontend Features of a new membership info retrieval website with React Js and Tailwind"
    },
    {
        title: "Swapswipe",
        description:"Swapswipe is a sustainable platform to swap or buy pre-loved books. I joined the team for Youth Action Plan Competition by National Youth Corps Singapore and won SGD 27,000 Grant in the category of ‘Environment & Sustainability.",
        contribution:"I revamped the landing pages by splitting one long page into several menus, modifying the user interface and features pages under PHP/Laravel Web framework, JQuery, Bootstrap, and Docker Container."
    }

]
const PersonalProjectDetails = [
    {
        title: "This Website",
        description: "As mentioned, this website is for me to showcase what I've done, not only in software engineering projects but my other hobbies as well. And one more thing, I still prefer backend compared to frontend 😀.",
        contribution: "The website is built with React Js Framework and Tailwind CSS."
    },
    {
        title: "Web Scraping",
        description: "My First ever attemp of coding project outside of school during my Term 2 in university.",
        contribution: "I used a Python library called Beautiful Soup to scrap list of software engineer jobs hiring into a csv file."
    },

]

const InternshipDetails = [
    {
        title: "Technical Product Manager at Climate Action Data Trust",
        description: "CADTrust is a decentralised metadata platform that links carbon credit data from major registries, founded by Government of Singapore, World Bank, and International Emission Trading Agencies",
        contribution: ""
    },
    {
        title: "Software Engineer at Mediacorp",
        description: "Mediacorp is a nationwide and worldwide broadcasting company in Singapore. I am currently serving 16 weeks of internship at Digital and Web Development Team, specifically meConnect SSO Platform.",
        contribution: "The skills that I have learned consist of Web API Infrastructure with .NET Core/C#, CI/CD with Jenkins, Unit Testing with PHPUnit, React.js, Tailwind CSS, Microsoft Azure DevOps, as well as Braze Platform for Emailing System."
    },

];
const TitleLists = [
    {
        header: "Internship",
        detailsName: InternshipDetails,
        logo:require("../images/internship.png"),
    },
    {
        header: "Outside of Schools",
        detailsName: OutsideProjectDetails,
        logo:require("../images/outsideproject.png"),
    },

    {
        header: "Software School Projects",
        detailsName: SoftwareProjectDetails,
        logo:require("../images/group.png"),
    },
   
 
    {
        header: "Data Analytics School Projects",
        detailsName: DataProjectDetails,
        logo:require("../images/group.png"),
    },
    {
        header: "Competitions",
        detailsName: CompetitionDetails,
        logo:require("../images/competition.png"),
    },
   
    {
        header: "Personal Projects",
        detailsName: PersonalProjectDetails,
        logo:require("../images/rocket.png"),
    },

]

