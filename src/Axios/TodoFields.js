import React from 'react';

const TodoFields = ({ onAdd, todoData, change, onDelete, data, onEdit, selectItems, error, onClearData,onCancel }) => {
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
                {!selectItems ? <button
                    style={{backgroundColor:"#a6acaf"}}
                    className="addBtn"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                    : null
                }
                <div className="validate">
                    {error}
                </div>
            </div>
            {data?.map((item) => {
                return <div className="axoisDataWrap" key={item.id}>
                    <div>
                        <input
                            type="checkbox"
                            id=""
                            name=""
                            value="checkbox" />
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
            {data?.length ? <button className="clearBtn" onClick={onClearData}>Clear All</button> : null}
        </div>
    );
};

export default TodoFields;