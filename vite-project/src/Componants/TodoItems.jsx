import  "./CSS/TodoItems.css"
import tick from "./Assets/tick.png";
import cross from  "./Assets/cross.png";
import circle from  "./Assets/circle.png";

const TodoItems = ({no,display,text,setTodo}) => {

    const toggel = (no) => {
        const data = JSON.parse(localStorage.getItem('todo'));
        for (let i = 0; i < data.length; i++) {
        if (data[i].no === no) {
            display = "line-through";
        }
        else{
            display = "";
        }
        break;
       }
       setTodo(data);
}


    return (
        <div className="todoitems">
            <div className="toditems-container" onClick={() => {toggel(no)}}>
                {display===""?<img src={circle} alt=""/>:<img src={tick} alt=""/>} 
                <div className="todoitems-text">{text}</div>
            </div>
            <img className="todoitems-cross-item" src={cross} alt="" />
        </div>
    );
}

export default TodoItems