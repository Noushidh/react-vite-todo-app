import {useState } from "react";

function Todo() {

  type Todoitem ={
    text:string,
    deadline:string,
  }
    const [newTodo,setNewTodo] = useState('')
    const [todos,setTodos] = useState<Todoitem[]>([])
    const [deadline,setDeadline] = useState('')
    const [editIndex,setEditIndex] = useState<number|null>(null)

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) =>{
       if(e.key === 'Enter' && newTodo.trim() && deadline){
        const todo:Todoitem={
          text:newTodo,
          deadline:deadline,
        }
        
        if(editIndex!==null){
           const updatedTodos = [...todos]
           updatedTodos[editIndex]=todo
           setTodos(updatedTodos)
           setEditIndex(null)
        }else{
          setTodos([...todos,todo])
        }

        setNewTodo('')
        setDeadline('')
       }
    }

    const deleteTodo = (indexToDelete:number) =>{
         setTodos(todos.filter((_,index)=>index!==indexToDelete))
    }


  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-10">
      <div className= "border-4 border-green-100 bg-[oklch(0.73_0.26_149.92)] w-100 h-40 rounded-2xl shadow-2xl flex flex-col justify-center items-center">

        <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-2xl text-[#c9ffd9] font-bold">Todo App</h2>
        <input type="datetime-local" value={deadline} className="bg-white  rounded px-3 py-1" 
        onChange={(e)=>setDeadline(e.target.value)}
        />
        <input type="text" value={newTodo} placeholder="Enter items..."  className="bg-white border rounded px-3 py-1"
        onChange={(e)=>setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}/>
        </div>

      </div>

<ul className="flex flex-col gap-2">
  {todos.map((todo,index)=>(
      <li key={index} className="flex items-center gap-1"> 
           <div className="border-4 text-white rounded-2xl border-white bg-[oklch(0.73_0.26_149.92)] w-75 h-25 shadow-2xl flex flex-col justify-center items-center">
     {/* Row 1 */}
            <div className="flex justify-center">
          <span className="text-lg">{todo.text}</span>
        </div>
    
        {/* Row 2 */}
          <div className="flex items-center justify-between mt-2">
          <small> 
             {new Date(todo.deadline).toLocaleString("en-IN", {
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            year: "numeric",
            minute: "2-digit",
            })}
          </small>

      <div className="flex gap-2">
     <button className="flex cursor-pointer hover:bg-black/50 hover:text-white text-green-400 items-center bg-white w-15 border-3  border-green-500 rounded-2xl justify-center"
        onClick={()=>{
          setNewTodo(todo.text)
          setDeadline(todo.deadline)
          setEditIndex(index)
        }
        }>
       edit
      </button>
      <button className="bg-black/60 cursor-pointer rounded-2xl w-10 border-3"
        onClick={()=>deleteTodo(index)}>
        <i className="fas fa-trash"></i>
      </button>
              </div>
          </div>
      </div>
    </li>
  ))}
  </ul>
    </div>
  );
}

export default Todo;