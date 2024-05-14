import React from "react";
type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
};
type propsType = {
    closedBtn:void;
    title : React.ReactNode
}


const TodoModal : React.FC = () => {
    return(
        <div className="modal-back">
            <div className="darkBack"></div>
            <div className="modal">
                <h2>모달 연습</h2>
                <button >닫기</button>
            </div>
        </div>
    )
}
export default TodoModal;