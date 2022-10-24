export default function PhotographyContent(props) {

    const description = "     I don't have any other platform where I post my portfolio. I often shots scenery either city or nature, and a bit of portrait and product photography. I am also open to explore about wedding/graduation photography if I have the chance to work part-time from the more experienced person. For Instagram, I intentionally decide what pictures to post so they match the IG-feed style so sometimes it is hard for me to choose and I even don't post several good shots. Nowadays, I only use my phone since I prioritise bringing my laptop for study instead of taking pictures. But I will definitely bring camera during my exchange program in Sweden soon!";
    const {
        image,logo
    } = props
    return (
              <div className="border border-blue-900 p-16 rounded-3xl my-8 md:w-1/2 mx-auto">
            <div className=" content-center">
                 <img
                    className="max-h-16 max-w-16 mx-auto mb-6"
                    alt="hero"
                    src={require("../images/Instagram_icon.webp")}
                />
                
                <h1 className="text-center pb-10 text-2xl underline">
                    <b>My Instagram Feeds</b>
                </h1>

                <img
                    className="object-cover object-center rounded mb-10 "
                    alt="hero"
                    src={image}
                />
                <img
                    className="max-h-16 max-w-16 mx-auto mb-6"
                    alt="hero"
                    src={logo}
                />
                 <h1 className = "text-center pb-10 text-2xl underline">
            <b>More Info</b>
          </h1>
            </div>
            <p className="pb-10 text-justify">
                {description}
            </p>

        </div>
      

    );

}