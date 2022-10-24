export default function CoffeeHeader(props){
    const {
        header,description
    } = props;
    return(
        <div>
          <p className = "text-center my-10 mx-10 text-4xl underline">
            <b>{header}</b>
          </p>
          <p className = "md:text-center text-justify my-10 mx-10 text-md">
            {description}
          </p>
        </div>
            );
}
