import { useState } from "react";

function Todo() {
    const [item,setItem] = useState('')
    
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-10">
      <div className= "border-4 border-green-100 bg-[oklch(0.73_0.26_149.92)] w-100 h-40 rounded-2xl shadow-2xl flex flex-col justify-center items-center">

        <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-2xl text-[#c9ffd9] font-bold">Todo App</h2>
        <input type="text" value={item} placeholder="Enter items..."  className="bg-white border rounded px-3 py-1"
        onChange={(e)=>setItem(e.target.value)}
        onKeyDown={(e)=>{}}/>
        </div>

      </div>
<ul>
    <div className="flex items-center gap-1"> 
     <div className="border-4 text-white rounded-2xl border-white bg-[oklch(0.73_0.26_149.92)] w-75 h-10 flex justify-center items-center ml-4">
     <span>hello </span>
     </div>
     <button className="flex items-center bg-white w-15 border-3  border-green-500 rounded-2xl justify-center">edit</button>
     <button className="bg-white rounded-2xl w-10 border-3 border-red-500"><i className="fas fa-trash"></i></button>
    </div>
</ul>


    </div>
  );
}

export default Todo;