import { useState } from "react";
import Timer from "./Timer";
type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
};

const ToDoList : React.FC = () => {
    const title : string = "오늘 할 일";
    const [todos, setTodos] = useState<Todo[]>([
        {id : 1, text : '공부하기', isChecked : false},
        {id : 2, text : '게임하기', isChecked : false},
        {id : 3, text : '미팅하기', isChecked : false},
    ]);
    const [newTodo, setNewTodo] = useState<string>('')
    const handleCheckedChange = (itemId : number) => {
        setTodos((prevItems) => 
            prevItems.map((item) =>
            item.id === itemId ? {...item, isChecked : !item.isChecked} : item))
    }

    const addTodo = () => {
        if(newTodo.trim() !== ''){
            setTodos([...todos, {id : Date.now(), text : newTodo, isChecked : false}])
            setNewTodo('');
        }
    }
    return(
        <div>
            <h1>{title}</h1>
            <div className="container">
                <div>
                    <Timer/>
                    <input type = "text" placeholder="할 일 입력" onChange = {(e) => setNewTodo(e.target.value)}>

                    </input>
                    <button onClick={addTodo}>추가</button>
                </div>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <input type="checkbox" onChange={() => handleCheckedChange(todo.id)}></input>
                            <span>
                                {
                                    todo.isChecked ? 
                                    <del>{todo.text}</del>
                                    : <span>{todo.text}</span>
                                }
                                
                            </span>
                        </li>
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}
export default ToDoList;