export default function BlockCodingContent(props) {
    const {
        title,
        description,
        contribution,
    } = props


    return (
        <div className=" hover:bg-gray-200 border border-blue-900 p-16 rounded-3xl my-8">
            <h1 className="text-center pb-10 text-4xl">
                <b>{title}</b>
            </h1>
            <p className="pb-10 text-justify">
                {description}
            </p>
            <p className="pb-10 text-justify">
                {contribution}
            </p>
        </div>


    );
}