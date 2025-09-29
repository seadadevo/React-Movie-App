const Add = () => {
  return (
    <div className="">
      <div className="container mx-auto mt-10">
        <div className="add-content flex items-center justify-center">
            <div className="w-[500px]">
                <input className="w-full rounded-2xl  p-3 text-2xl border" type="text" placeholder="search for movie..." />
            </div>
            <ul className="results">

            </ul>
        
        </div>
      </div>
    </div>
  )
}

export default Add
