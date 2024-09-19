export default function AboutBlock(props){
    const {
        logo,header,description
    } = props;
    return(
        <div className="container mx-auto py-20 md:flex-row flex-col items-center hover:bg-gray-200">
        <div>
        <img src ={logo} className= "max-h-32 max-w-32 mx-auto mb-6"
          />
          <h1 className = "text-center pb-10 text-2xl underline">
            <b>{header}</b>
          </h1>
          <h2 className = "text-center px-5">
            {description}
          </h2>
        </div>
      </div>
    );
}
