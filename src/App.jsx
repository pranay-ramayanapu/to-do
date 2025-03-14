import { useState } from "react";
import "./style.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);
  };

  const handleCheck = (id ) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            id="item"
          />
        </div>
        <button className="btn" type="submit">
          Add
        </button>
      </form>
      <h1 className="header">ToDo List</h1>
      <ul className="list">
        {items.map((item) => {
          return (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  onChange={ ()=> {
                    handleCheck(item.id);
                  }}
                  checked={item.completed}
                />
                {item.title}
              </label>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
