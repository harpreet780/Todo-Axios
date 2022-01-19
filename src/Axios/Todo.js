import React, { useState, useEffect } from 'react';
import axios from "axios"
const Axios = () => {
    const [data, setData] = useState([]);
    const [todoData, setTodoData] = useState("");
    const TodoValue = (e) => {
        setTodoData(e.target.value);
    }
    const onSubmit = (e) => {
        let singleTodo = {
            name: todoData,
            complete: false
        }
        e.preventDefault();
        axios.post("http://localhost:4000/data", singleTodo).then((res) => {
            console.log(res.data)
            data.push(res.data);
            setTodoData("");
        })
    }
    useEffect(() => {
        axios.get("http://localhost:4000/data").then((res) => {
            console.log(res.data)
            setData(res.data);
        })
    }, [])
    return (
        <div className="Wrapper">
            <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={TodoValue}
                className="TodoInput" />
            <button
                className="addBtn"
                onClick={onSubmit}>
                Add
            </button>
            {data?.map((item) => {
                return <p>{item.name}</p>
            })}
        </div>
    );
};

export default Axios;