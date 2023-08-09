export default function BooksGrid(props) {
    const {
      title, writer,pages,pict,quotes
    } = props
    return (
      <div className="flex-col m-6 border p-5 rounded-lg hover:bg-slate-200">
        <div className=" content-center">
          <img
            className="object-cover object-center rounded w-80"
            alt="hero"
            src={pict}
          />
        </div>      
        <div className = "mt-5 border p-2 rounded-lg font-mono text-left text-xs">
          <p><b>Title :</b> {title}</p>
          <p><b>Writer :</b> {writer}</p>
          <p><b>Pages :</b> {pages}</p>
          <p><b>Quotes :</b> {quotes}</p>
          
        </div>

      </div>
  
    );
  
  };