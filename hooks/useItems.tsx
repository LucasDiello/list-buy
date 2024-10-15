import { Item } from "@/components/dropdown/DropDownCategory";
import { useState } from "react";

const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<Item>({
    id: "0",
    item: "",
    quantity: 1,
    unit: "un",
    category: "",
    completed: false,
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setItems([...items, { ...newItem, id: (items.length + 1).toString(), completed: false }]);
    setNewItem({
      id: "0",
      item: "",
      quantity: 1,
      unit: "un",
      category: "",
      completed: false,
    });
  };

  const toggleComplete = (id: string) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    console.log(updatedItems)
    setItems(updatedItems);
  };

  return {
    items,
    newItem,
    handleChange,
    handleSubmit,
    toggleComplete,
    setNewItem
  };
};

export default useItems;
