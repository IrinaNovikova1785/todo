export default function TodoList(props) {
    return(
        <div className="todo">
            <h1>Список дел</h1>
            <ul className="todo__list">
                {
                    props.list.map(item =>
                        <li key={item.keyIn}>
                            {!item.done && <p>{item.title}</p>}
                            {item.done && <del>{item.title}</del>}
                            {!item.done && <button onClick={() => props.done(item.keyIn)} className="btn btn__done">&#10003;</button>}
                            {item.done && <button disabled={true} className="btn btn__done">&#10003;</button>}
                            <button onClick={() => props.del(item.keyIn)} className="btn btn__del">&#9746;</button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}