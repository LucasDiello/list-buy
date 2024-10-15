"use client";
import React, { useState } from "react";
import { Apple, Beef, Carrot, CheckIcon, Milk, MoreVertical, Sandwich } from "lucide-react";
import "./listItems.css";
import DropdownCategory from "./DropDown";
import DropDownUnit from "./DropDownUnit";

const initialItemsExample = [
    {
        id: 1,
        item: "Maçã",
        quantity: 2,
        unit: "unidade",
        category: "Fruta",
        completed: false,
    },
    {
        id: 2,
        item: "Pão",
        quantity: 1,
        unit: "unidade",
        category: "Padaria",
        completed: false,
    },
    {
        id: 3,
        item: "Leite",
        quantity: 1,
        unit: "Litros",
        category: "Bebida",
        completed: false,
    },
    {
        id: 4,
        item: "Cenoura",
        quantity: 1,
        unit: "unidade",
        category: "Legume",
        completed: false,
    },
    {
        id: 5,
        item: "Carne",
        quantity: 1,
        unit: "Kg",
        category: "Carne",
        completed: false,
    },
    ];
    
    const ListItems = () => {
  const [items, setItems] = useState(initialItemsExample);
  const [newItem, setNewItem] = useState({
    id: 0,
    item: "",
    quantity: 1,
    unit: "un",
    category: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setItems([...items, newItem]);
    setNewItem({ id: items.length + 1, item: "", quantity: 1, unit: "un", category: "" });
  };

  const toggleComplete = (id: number) => {  
    const updatedTasks = items.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setItems(updatedTasks);
  };

  const icons: { [key: string]: JSX.Element } = {
    Fruta: <Apple size={20} color="#E07B67" />,
    Legume: <Carrot size={20} color="#8CAD51" />,
    Padaria: <Sandwich size={20} color="#BB9F3A " />,
    Carne: <Beef size={20} color="#DB5BBF" />,
    Bebida: <Milk size={20} color="#7B94CB" />,
  };

  const categoryColors: { [key: string]: string } = {
    Fruta: "rgb(38, 26, 23, 1)",
    Legume: "rgb(28, 32, 21, 1)",
    Padaria: "rgb(26, 29, 35, 1)",
    Carne: "rgb(37, 22, 34, 1)",
    Bebida: "rgb(26, 29, 35, 1)",
  };

  const categoryTextColors: { [key: string]: string } = {
    Fruta: "rgb(224, 123, 103, 1)",
    Legume: "rgb(140, 173, 81, 1)",
    Padaria: "rgb(187, 159, 58, 1)",
    Carne: "rgb(219, 91, 191, 1)",
    Bebida: "rgb(123, 148, 203, 1)",
  };

  console.log(items)

  const pluralizeUnit = (unit: string, quantity: number) => {
    const unitPlurals: { [key: string]: string } = {
      un: "unidades",
      Kg: "Kg",
      L: "Litros",
    };
  
    return quantity > 1 ? unitPlurals[unit] || unit : unit;
  };

  return (
    <section className="w-full h-[100vh] flex justify-center items-center flex-col">
      <div>
        <h1 className="text-heading1 text-left">Lista de Compras</h1>
        <form onSubmit={handleSubmit} className=" flex  space-x-3 items-end mt-5">
          <label className="text-body text-gray-200 ">
            {" "}
            Item
            <input
              className={` focus:border-purple-light mt-1 border-gray-300 block w-[326px] h-[40px] rounded-md border-[1px] bg-gray-400`}
              type="text"
              name="item"
              value={newItem.item}
              onChange={handleChange}
              required
            />
          </label>
                <DropDownUnit handleChange={handleChange} unit={newItem.unit} newItem={newItem} setNewItem={setNewItem} />
            <DropdownCategory category={newItem.category} newItem={newItem} setNewItem={setNewItem} />
          <button className="h-[40px] w-[40px] bg-purple-light hover:bg-purple-dark  rounded-full" type="submit">+</button>
        </form>
        <ul className="mt-10">
          {items.map((item, index) => (
            <div key={item.id} className={`flex mb-2 p-4 ${item.completed ? "bg-gray-500" : "bg-gray-400"} justify-between items-center rounded-lg border-[1px]  border-gray-300`}>
              <div className="flex space-x-4 ">
                <div className="flex justify-center items-center">
                  {item.completed ? (
                    <>
                      <div>
                        <input
                          type="checkbox"
                          checked={item.completed}
                          readOnly
                          className="appearance-none"
                        />
                      </div>
                      <label
                        className="rounded-sm border-[1px] hover:bg-[rgb(81,154,87)] cursor-pointer hover:border-[rgb(81,154,87)] border-[rgb(53,117,58)] h-4 w-4 bg-[rgb(53,117,58)] flex justify-center items-center"
                        onClick={() => toggleComplete(item.id)}
                      >
                        <CheckIcon size={10} />
                      </label>
                    </>
                  ) : (
                    <div className="task-item">
                      <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => toggleComplete(item.id)}
                        className="appearance-none w-4 h-4 bg-inherit hover:cursor-pointer hover:bg-purple-dark border-purple-light border-[1px] rounded-sm"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-heading2">{item.item}</h2>
                  <p className="text-body text-gray-200">
                    {item.quantity} {pluralizeUnit(item.unit, item.quantity)}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div style={{
                    backgroundColor: categoryColors[item.category],
                    color: categoryTextColors[item.category],
                }} className="flex items-center  pr-4 pl-4 p-2 rounded-full text-body">
                {icons[item.category]} <span className="ml-2">{item.category}</span>
                </div>
                <MoreVertical size={20} color="#A881E6" />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ListItems;
