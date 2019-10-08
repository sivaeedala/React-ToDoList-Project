import React, { Component } from "react";
import Item from "./ToDoItem";

class ToDoList extends Component {
  render() {
    const { items, handleClearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">ToDo List</h3>
        {items.map(e => {
          return (
            <Item
              key={e.id}
              todo={e}
              handleDelete={() => {
                handleDelete(e.id);
              }}
              handleEdit={() => {
                handleEdit(e.id);
              }}
            ></Item>
          );
        })}
        <button
          type="button"
          onClick={handleClearList}
          className="btn btn-danger btn-block text-uppercase mt-5"
        >
          Clear List
        </button>
      </ul>
    );
  }
}

export default ToDoList;
