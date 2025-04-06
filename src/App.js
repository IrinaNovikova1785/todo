import TodoList from './components/todoList/TodoList.jsx';
import initTodos from './components/todoList/todos';
import {useState} from "react";
import TodoAdd from "./components/todoAdd/todoAdd";
import "../src/css/style.css"
import {NavLink, Outlet} from "react-router-dom";

function App() {
    const [todos, setTodos] = useState(initTodos);
    const setDone = key => {
        const todoList = [...todos];
        const newStateTodo = todoList.find(item => item.keyIn === key);
        if (newStateTodo) {
            newStateTodo.done = true;
            setTodos(todoList);
        }
    }
    const del = key => {
        const todoList = [...todos];
        const newStateTodo = todoList.filter(item => item.keyIn !== key);
        setTodos(newStateTodo);
    }
    const add = deed => {
        setTodos([...todos, deed]);
    }
  return (
    <div>
      {/*<TodoList list={todos} done={setDone} del={del}/>*/}
      {/*  <TodoAdd add={add}/>*/}
        <NavLink to="/" className={({isActive})=> 'link' + (isActive ? ' link--active': '')}>Мои дела</NavLink>
        <NavLink to="/add" className={({isActive})=> 'link' + (isActive ? ' link--active': '')}>Создать дело</NavLink>
        <Outlet />
    </div>
  );
}

export default App;
