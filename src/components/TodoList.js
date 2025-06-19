const TodoList = ({ todos, onDelete, onToggle }) => {
    if (todos.length === 0) {
        return <p>할 일이 없습니다.</p>;
    }
    return (
        <ul className="list">
            {todos.map((item) => {
                return (
                    <li className="list-item" key={item.id}>
                        <span className="checkbox-wrapper">
                            <input
                                className="list-checkbox"
                                type="checkbox"
                                onChange={() => onToggle(item.id)}
                                checked={item.done}
                            />
                        </span>
                        <span
                            className="list-text"
                            style={{
                                textDecoration: item.done
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {item.todo}
                        </span>
                        <button
                            className="list-delete"
                            onClick={() => {
                                onDelete(item.id);
                            }}
                        >
                            삭제
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default TodoList;