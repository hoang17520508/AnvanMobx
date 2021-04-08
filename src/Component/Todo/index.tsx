import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../../store";

export const Todo = observer(() => {
  const { todoStore } = useStore();
  const { onChecked, todos, onAdd, onEdit,onDelete } = todoStore;
  
  return(
    <div>
    <ol>
      {todos.map(({ title, checked }, index) => (
        <div  key={index} style={{marginBottom:"10px",backgroundColor:"gray"}}>
          <input className="text-center"
            value={title}
            onChange={(e) => onEdit(index, e.target.value)}
          />
          <p onClick={() => onChecked(index, !checked)}>
            {title} - {checked ? "Done" : "Not done"}
            
          </p>
          <button className="btn btn-danger p-4 text-center" onClick={()=>{onDelete(index)}}>X</button>
        
        </div>
      ))}
    </ol>
    <button onClick={onAdd}>Add</button>
  </div>
  );
});
