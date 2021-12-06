import "./index.css";
import {useState} from "react";

function Pagination() {
        const [pageInfo, setPageInfo] = useState({
            todos: ['a','b','c','d','e','f','g','h','i','j','k'],
            currentPage: 1,
            todosPerPage: 3
        });

    function handleClick(event) {
        setPageInfo({
            ...pageInfo,
            currentPage: Number(event.target.id)
        });
    }

    const { todos, currentPage, todosPerPage } = pageInfo;

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((todo, index) => {
        return <li className="character" key={index}><h2>{todo}</h2></li>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li
                key={number}
                id={number}
                onClick={handleClick}
                style={{color: (number === pageInfo.currentPage) ? 'black' : 'blue'}}
            >
                {number}
            </li>
        );
    });
    return (
        <div style={{width: '400px'}}>
            <ul>
                {renderTodos}
            </ul>
            <ul id="page-numbers">
                {renderPageNumbers}
            </ul>
        </div>
    );
}

export default Pagination;