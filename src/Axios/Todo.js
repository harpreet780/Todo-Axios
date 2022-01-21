import React, { useState, useEffect } from 'react';
import { HttpsReq } from "./HttpApi/api"
import TodoFields from './TodoFields';
const Axios = () => {
    const [data, setData] = useState([]);
    const [selectItems, setSelectItems] = useState(true);
    const [selectId, setSelectId] = useState();
    const [error, setError] = useState("")
    const AxiosEffect = () => {
        HttpsReq.get("data").then((res) => {
            setData(res.data);
        })
    }
    useEffect(() => {
        AxiosEffect()
    }, [])
    const [todoData, setTodoData] = useState("");
    const TodoValue = (e) => {
        setTodoData(e.target.value);
        setError("")
    }
    const onAdd = (e) => {
        if (!todoData) {
            setError("must enter value*")
            return
        }
        if (todoData && !selectItems) {
            setData(data.map((item) => {
                if (item.id === selectId) {
                    return { item, name: todoData }
                }
                return item
            })

            )
            const found = data.find(item => item.id === selectId);
            const foundnew = { ...found, name: todoData }
            HttpsReq.put(`data/${selectId}`, foundnew).then(() => {
                setTodoData("");
            })
        }
        else {
            let singleTodo = {
                name: todoData,
                complete: false
            }
            e.preventDefault();
            HttpsReq.post("data", singleTodo).then((res) => {
                setData([...data, res.data])
                setTodoData("");
            })
        }
    }
    const onDelete = (id) => {
        HttpsReq.delete(`data/${id}`).then(() => {
            const result = data.filter(item => item.id !== id);
            setData(result);
        })
    }
    const onEdit = (id) => {
        const found = data.find(item => item.id === id);
        setTodoData(found.name)
        setSelectItems(false)
        setSelectId(id)
    }
    const onClearData = () => {
        data.forEach((item)=>{
            HttpsReq.delete(`data/${item.id}`).then((res) => {
                setData();
            })
        })
    }
    return (
        <div className="Wrapper">
            <TodoFields
                data={data}
                onAdd={onAdd}
                onDelete={onDelete}
                todoData={todoData}
                change={TodoValue}
                onEdit={onEdit}
                error={error}
                selectItems={selectItems}
                onClearData={onClearData}
            />
        </div>
    );
};

export default Axios;