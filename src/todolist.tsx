import { useState } from "react";
import Timer from "./Timer";
import TodoModal from "./TodoModal";
import styles from "./todolist.module.css"
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
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null)
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
    const delTodo = (id : number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleTodoClick = (todo: Todo) => {
        setShowDetail(true)
        setSelectedTodo(todo)
    }

    const handleCloseDetail = () => {
        setShowDetail(false)
    }
    return(
        <div className={styles.todolist}>
            <h1>{title}</h1>
            <div className="todolist">
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
                                    : <span onClick={() => handleTodoClick}>{todo.text}</span>
                                }
                            </span>
                            <button onClick={(id) => delTodo}>삭제</button>
                        </li>
                    ))}
                    
                </ul>
            </div>
            {showDetail ? <TodoModal /> : ''}
            
        </div>
    )
}
export default ToDoList;

