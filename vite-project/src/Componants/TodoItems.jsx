import React, { useState } from 'react';
import  "./CSS/TodoItems.css"
import tick from "./Assets/tick.png";
import cross from  "./Assets/cross.png";
import circle from  "./Assets/circle.png";

const TodoItems = ({ no, display, text, setTodo }) => {
    const [isChecked, setIsChecked] = useState(display === "line-through"); // State for checked status
    // const [isChecked, setIsChecked] = useState(display === "line-through"); // State for checked status
    const toggleTodo = () => {
        setIsChecked(!isChecked); // Toggle checked status
        // Update todo item in state with the new display style
        setTodo(prevTodo => prevTodo.map(todo => {
            if (todo.no === no) {
                return { ...todo, display: isChecked ? "" : "line-through" };
            }
            return todo;
        }));
    };
    const deleteTodo = (no) => {
        // Update todo item in state with the new display style
        setTodo(prevTodo => prevTodo.filter(todo => todo.no !== no));
    };
    // const deleteTodo = (no) => {
    //     // Remove the todo item from state
    //     setTodo(prevTodo => prevTodo.filter(todo => todo.no !== no));
    // };
    console.log(setTodo)
    return (
        <div className="todoitems">
            <div className={`toditems-container ${display}`} onClick={toggleTodo}>
                {isChecked ? <img src={tick} alt="" /> : <img src={circle} alt="" />}
                <div className="toditems-text">{text}</div>
            </div>
            <img className="todoitems-cross-item" src={cross} alt="" onClick={() => deleteTodo(no)} />
        </div>
    );
}


export default TodoItems;




// import  "./CSS/TodoItems.css"
// import tick from "./Assets/tick.png";
// import cross from  "./Assets/cross.png";
// import circle from  "./Assets/circle.png";

// const TodoItems = ({no,display,text,setTodo}) => {

//     const toggel = (no) => {
//         const data = JSON.parse(localStorage.getItem('todo'));
//         console.log(no,"no")
//         for (let i = 0; i < data.length; i++) {
//             console.log(data[i],"data[i]---")
//             if (data[i].no === no) {
//                 display = "line-through";
//                 console.log(display)
//                 console.log(display,"inside if")
//             }
//             else{
//                 display = "";
//                 console.log(display,"inside else")
//             }
//             break;
//         }
//         setTodo(data);
// }


//     console.log(display,"display---------")
//     return (
//         <div className="todoitems">
//             <div className="toditems-text">{text}</div>
//             <div className="toditems-container" onClick={() => {toggel(no)}}>
//                 {display === "" ? <img src={circle} alt="" /> : <img src={tick} alt="" />}
//             </div>
//             <img className="todoitems-cross-item" src={cross} alt="" />
//         </div>
//     );
    // return (
    //     <div className="todoitems">
    //         <div className="toditems-container" onClick={() => {toggel(no)}}>
    //             {display===""?<img src={circle} alt=""/>:<img src={tick} alt=""/>} 
    //             <div className="todoitems-text">{text}</div>
    //         </div>
    //         <img className="todoitems-cross-item" src={cross} alt="" />
    //     </div>
    // );
// }

// export default TodoItems