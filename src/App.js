import TodoList from './TodoList.jsx';
import initTodos from './todos';
import {useState} from "react";

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
  return (
    <div>
      <TodoList list={todos} done={setDone} del={del}/>
    </div>
  );
}

export default App;
