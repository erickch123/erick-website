export default function PhotographyContent(props) {

    const description = "     I don't have any other platform where I post my portfolio. I often shots scenery either city or nature, and a bit of portrait and product photography. I am also open to explore about wedding/graduation photography if I have the chance to work part-time from the more experienced person. Lately, my IG feeds are mostly travel pictures around Europe during my exchange in Sweden. I did budget traveling to 17 countries in total :)";
    const {
        image, logo
    } = props
    return (
        <div className="border border-blue-900 p-16 rounded-3xl my-8 md:w-1/2 mx-auto">
            <div className="content-center">
                <a href="https://instagram.com/erickkkk_photos" target="_blank" rel="noopener noreferrer">
                   

                    <h1 className="text-center pb-10 text-2xl underline">
                        <b>My Instagram Feeds</b>
                    </h1>

                    <img
                        className="object-cover mx-auto center rounded mb-10 "
                        alt="hero"
                        src={image}
                    />
                    <img
                        className="max-h-16 max-w-16 mx-auto mb-6"
                        alt="hero"
                        src={logo}
                    />
                    <h1 className="text-center pb-10 text-2xl underline">
                        <b>More Info</b>
                    </h1>
                    </a>
            </div>
            <p className="pb-10 text-justify font-bold">
                {description}
            </p>

        </div>


    );

}