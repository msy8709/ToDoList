import { useState } from "react";

const ToDoList : React.FC = () => {
    const title : string = "오늘 할 일";
    const [todos] = useState(['공부하기']);
    return(
        <div>
            <h1>{title}</h1>
            <div className="container">
                <ul>
                    <li>{todos[0]}</li>
                </ul>
            </div>
        </div>
    )
}
export default ToDoList;