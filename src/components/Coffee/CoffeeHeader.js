export default function CoffeeHeader(props){
    const {
        header,description
    } = props;
    return(
        <div className="pt-11">
          <p className = "text-center pt-6 my-10 mx-10 text-4xl ">
            <b>{header}</b>
          </p>
          <p className = "md:text-center text-justify my-10 mx-10 text-md font-mono">
            {description}
          </p>
         </div>
            );
}
