import {observable,reaction,action, makeAutoObservable} from "mobx"
import { title } from "node:process"
export type TItemToDo={
    title:string,
    checked:boolean
}
export class Todo{
    @observable todos:TItemToDo[]=[
        {title:"Do homework",
    checked:false},
    {title:"Learn mobx",
    checked:false}
    ]
    constructor() {
      makeAutoObservable(this)
        /** Chay khi ma title thay doi (hoac length cua array) */
        reaction(
          () => this.todos.map((todo) => todo.title),
          (titles) => console.log("reaction 2:", titles.join(", "))
        );
        /** Chay khi ma length thay doi */
        reaction(
          () => this.todos.length,
          (length) =>
            console.log(
              "reaction 1:",
              this.todos.map((todo) => todo.title).join(", ")
            )
        );
      }
    @action 
    onEdit=(index:number,values:string)=>{
        this.todos[index].title=values
    };
    @action
    onChecked=(index:number,checked:boolean)=>{
        this.todos[index].checked=checked
    }
    @action
    onAdd=()=>{
        this.todos=this.todos.concat({
            title:`todo ${this.todos.length}`,
            checked:false
        });
    }
    @action
    onDelete=(index:number)=>{
      
        this.todos.splice(index,1);
      
    
     
      
    }


}
export type TTodoStore=typeof Todo;
