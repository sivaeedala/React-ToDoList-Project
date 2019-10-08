import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoList from "./Component/ToDoList";
import ToDoInput from "./Component/ToDoInput";

export default class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleSubmit = e => {
    e.preventDefault();
    var todoItem = {
      id: this.state.id,
      title: this.state.item
    };

    this.setState({
      items: [...this.state.items, todoItem],
      item: "",
      id: uuid(),
      editItem: false
    });
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleClearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    this.setState({
      items: this.state.items.filter(e => e.id !== id)
    });
  };

  handleEdit = id => {
    var filterItems = this.state.items.filter(e => e.id !== id);
    var selectedItem = this.state.items.find(e => e.id === id);
    this.setState({
      items: filterItems,
      item: selectedItem.title,
      id: selectedItem.id,
      editItem: true
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">ToDo Input</h3>
            <ToDoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            ></ToDoInput>
            <ToDoList
              items={this.state.items}
              handleClearList={this.handleClearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            ></ToDoList>
          </div>
        </div>
      </div>
    );
  }
}
