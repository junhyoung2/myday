import { useEffect, useState,onToggle } from "react";
import Quote from "./Quote";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Mainpage = ({ user, onLogout }) => {
   const TODOS_KEY = `todos_${user}`;
    const [todos, setTodos] = useState([]);
    //처음에 localstrage에 저장된 todos값이 있으면 읽어와서 설정
    useEffect(() => {
        const saved = localStorage.getItem(TODOS_KEY); //문자열
        if (saved) {
            setTodos(JSON.parse(saved)); //문자열 > 객체로 변경해서 출력
        }
    }, []);
    //todos가 변경되면 localstorage에 저장
    useEffect(() => {
        const saved = JSON.stringify(todos); //객체를 문자열로
        localStorage.setItem(TODOS_KEY, saved);
    }, [todos]);
    const addTodo = (text) => {
        const newTodo = { id: Date.now(), todo: text, done:false};
        setTodos([...todos, newTodo]);
    };
    const deleteTodo = (id) => {
        const update = todos.filter((item) => {
            return item.id !== id;
        });
        setTodos(update);
    };
    const toggleTodo =(id)=>{
        const update =todos.map((item)=>{
            return item.id === id ? {...item, done:!item.done} : item;
        });
        setTodos(update);
    }
    return (
        <div>
            <h2 className="hi">{user}님, 반가워요.</h2>
            <button className="logout" onClick={onLogout}>EXIT</button>
            <Quote />
            <TodoForm onAdd={addTodo} />
            <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
        </div>
    );
};

export default Mainpage;
