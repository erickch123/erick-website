import BlockCodingContent from "../Coding/BlockCodingContent";
export default function FullBlock(props) {
    const {
        header,
        detailsName,
        logo,
    } = props;


    return (
        <div className="container flex lg:pl-10 pt-5 lg:flex-row flex-col items-center">
            <div className=" lg:mx-10  w-[300px] shrink-0 lg:mb-16   text-center">
                <img className="w-16 mx-auto" src={logo} />
                
                <h1 className="pb-10 text-4xl">
                    <b>{header}</b>
                </h1>
            </div>
            <div className=" lg:ml-20 flex-col mx-5 ">
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
