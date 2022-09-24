import * as React from "react";

export default function Coding() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 pt-20 md:flex-row flex-col items-center">
                <div className="lg:flex md:w-1/2 w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="text-left pb-10 pl-20 text-4xl">
                        <b>Group Projects</b>
                    </h1>
                </div>
                <div className="pl-20">
                    <h1 className="text-left pb-10  text-4xl">
                        <b>Website: Ascenda Loyalty Program Marketplace</b>
                    </h1>
                    <p className="pb-10">
                        Ascenda Loyalty operates an API based Loyalty Points Marketplace which facilitates easy and
                        seamless loyalty currency transfers between multiple loyalty programs. Customers of our loyalty
                        points marketplace product are typically loyalty programs that want to offer their customers abilities to
                        convert their own loyalty currency to a variety of other third party loyalty currencies.
                        You will be able to find many examples of such loyalty programs locally here in Singapore. For
                        example, GrabRewards, which is a loyalty program for Grab, offers the ability for one to convert Grab
                        points to airline currencies, such as Singapore Airlines KrisFlyer or AirAsia Big.

                        In this project, my contribution is heavily on backend site with only one frontend feature
                    </p>
                    <h1 className="text-left pb-10 text-4xl">
                        <b>Android App Developments : Smart Canteen @SUTD</b>
                    </h1>
                    <p>
                        an easy-to-use mobile application which allows people to check what dishes are available today and whether the stalls are still open. By allowing users to indicate their interest in buying from the stall, the stall owners can in turn see how many people are expected to turn up. This is a win-win situation as students and guests can see what foods are available in the canteen without having to visit the canteen physically, while the stall owners can gauge how many batches of food to make and decrease food waste.
                    </p>
                    <p>
                        Contribution :
                        • Automated image uploading and storing system into Firebase Storage which also returned the cloud URL link
                        that is passed to the Firebase Realtime Database.
                        • Implemented the database management class where the added menu details and images can be automatically
                        displayed inside the Frontend RecyclerView User Interface
                    </p>
                    <h1 className="text-left pb-10 text-4xl">
                        <b>Machine Learning : Covid-19 Death Prediction</b>
                    </h1>
                    <p>
                        Cleaned the World Covid-19 Data sourced from Kaggle with Pandas and Numpy
                        • Built a Linear regression model with 90 percent accuracy against the number of total cases, total tests,
                        vaccination rates, population, without implementing Scikit Library
                    </p>
                </div>

            </div>


        </section>
    );
}