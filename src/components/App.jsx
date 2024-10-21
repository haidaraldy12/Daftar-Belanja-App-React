import React, { useState } from "react";
import "../index.css";

import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";
import groceryItems from "../utils/data";

export default function App() {
  //lifting state up => agar komponen form diangkat ke komponen parents untuk bisa
  // dibagikan elementnya ke child nya
  const [items, setItems] = useState(groceryItems);

  // fungsi untuk menambahkan item yang akan dipanggil pada komponen form sebagai
  // props dan akan ditambahkan dengan new items yang ada pada komponen form
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleClearItems = () => {
    setItems([]);
  };

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}
