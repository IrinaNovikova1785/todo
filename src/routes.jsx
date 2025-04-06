import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import TodoList from "./components/todoList/TodoList";
import TodoAdd from "./components/todoAdd/todoAdd";
import todos from "./components/todoList/todos";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index={true} element={<TodoList list={todos} />}></Route>
            <Route path="add" element={<TodoAdd />}></Route>
        </Route>
    )
)

export default routes;