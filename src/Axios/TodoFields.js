import React from 'react';

const TodoFields = ({ onAdd, todoData, change, onDelete, data, onEdit, selectItems, error }) => {
    return (
        <div>
            <div className="inputFieldWrap">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={change}
                    value={todoData}
                    className="TodoInput" required />
                <button
                    className="addBtn"
                    onClick={onAdd}
                >
                    {selectItems ? "Add" : "Update"}
                </button>
                <div className="validate">
                    {error}
                </div>
            </div>
            {data?.map((item) => {
                return <div className="axoisDataWrap">
                    <div>
                        <input
                            type="checkbox"
                            id=""
                            name=""
                            value="" />
                        <span>{item.name}</span>
                    </div>
                    <div>
                        <button
                            style={{ backgroundColor: "#34c13a" }}
                            className="delBtn" onClick={() => { onEdit(item.id) }}>
                            Edit
                        </button>
                        <button
                            className="delBtn" onClick={() => { onDelete(item.id) }} >
                            Delete
                        </button>
                    </div>
                </div>
            })}
            <button className="clearBtn">Clear All</button>
        </div>
    );
};

export default TodoFields;