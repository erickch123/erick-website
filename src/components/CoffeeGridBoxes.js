
export default function CoffeeGridBoxes(props) {
    const {
      beansName, roaster,altitude,beanspicture, tastingnotes, personalremarks, process, varietal
    } = props
    return (
      <div className="flex-col m-6 border p-5 rounded-lg hover:bg-slate-200">
        <div className=" content-center">
          <img
            className="object-cover object-center rounded "
            alt="hero"
            src={beanspicture}
          />
        </div>      
        <div className = "mt-5 border p-2 rounded-lg font-mono text-left text-xs">
          <p><b>Beans :</b> {beansName}</p>
          <p><b>Roaster :</b> {roaster}</p>
          <p><b>Altitude :</b> {altitude}</p>
          <p><b>Varietal :</b> {varietal}</p>
          <p><b>Process :</b> {process}</p>
          <p><b>Tasting Notes  :</b> {tastingnotes}</p>
          <p> <b>Personal Remarks :</b>{personalremarks}</p>
        </div>
      </div>
  
    );
  
  }