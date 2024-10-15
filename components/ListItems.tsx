"use client";
import React, { useState } from "react";
const itemsMock = [
  { item: "Maçã", quantity: 2, unit: "unidades", category: "fruta" },
  { item: "Pão francês", quantity: 4, unit: "unidades", category: "padaria" },
  { item: "Brócolis", quantity: 1, unit: "unidade", category: "legume" },
  { item: "Leite", quantity: 2, unit: "litros", category: "bebida" },
  { item: "Peito de Frango", quantity: 2, unit: "kg", category: "carne" },
  { item: "Mamão", quantity: 1, unit: "unidade", category: "fruta" },
];

const ListItems = () => {
  const [items, setItems] = useState(itemsMock);
  const [newItem, setNewItem] = useState({
    item: "",
    quantity: 1,
    unit: "un",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, newItem]);
    setNewItem({ item: "", quantity: 1, unit: "un", category: "" });
  };
  return (
    <section className="border-2 w-full h-[90vh] flex justify-center items-center flex-col">
        <div>
      <h1 className="text-heading1 text-left">Lista de Compras</h1>
      <form onSubmit={handleSubmit} className="border-2 flex    ">
        <label> Item
        <input className="block"
          type="text"
          name="item"
          value={newItem.item}
          onChange={handleChange}
          placeholder="Item"
          required
          />
          </label>
          <label>
            Quantidade
            <div className="block">
        <input
          type="number"
          name="quantity"
          value={newItem.quantity}
          onChange={handleChange}
          placeholder="Quantidade"
          required
          
          />
        <select name="unit" value={newItem.unit} onChange={handleChange}>
          <option value="un">un</option>
          <option value="kg">kg</option>
          <option value="litros">litros</option>
        </select>
          </div>
        </label>
        <label> Categoria
        <select
          name="category"
          value={newItem.category}
          onChange={handleChange}
          required
          className="block"
          >
          <option value="">Selecione</option>
          <option value="fruta">fruta</option>
          <option value="padaria">padaria</option>
          <option value="legume">legume</option>
          <option value="bebida">bebida</option>
          <option value="carne">carne</option>
        </select>
        </label>
        <button type="submit">+</button>
      </form>
      <ul className="mt-10">
        {items.map((item, index) => (
                <div className="flex mb-2 bg-gray-400 justify-between items-center border-2 ">
                    <div className="flex  space-x-6 ">
                <input type="checkbox" name="" />
                <div className="border-2">
                    <h2 className="text-heading2">
                        {item.item}
                    </h2>
                    <p className="text-body text-gray-200">
                        {item.quantity} {item.unit}
                    </p>
                </div>
                    </div>
                {item.category}
                </div>
        ))}
      </ul>
        </div>
    </section>
  );
};

export default ListItems;
