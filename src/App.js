import TodoList from './components/todoList/TodoList.jsx';
import initTodos from './components/todoList/todos';
import {useState} from "react";
import TodoAdd from "./components/todoAdd/todoAdd";
import "../src/css/style.css"

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
      <TodoList list={todos} done={setDone} del={del}/>
        <TodoAdd add={add}/>
    </div>
  );
}

export default App;
