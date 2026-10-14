const Names = ({empData}) => {
  return (
    <div className="bg-gray-100 w-125 mb-4 mt-7 p-2 font-bold flex pr-10 justify-between ">
        <h1>{empData.name}</h1>
        <p>{empData.id}</p>
        <button>Show Details</button>
    </div>
  )
}

export default Names