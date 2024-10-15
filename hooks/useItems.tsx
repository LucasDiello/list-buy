import { Item } from "@/components/dropdown/DropDownCategory";
import apiRequest from "@/lib/apiRequest";
import { useState } from "react";

const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<Item>({
    id: "0",
    name: "",
    quantity: 1,
    unit: "un",
    category: "",
    completed: false,
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const getAllItems = async () => {
    try {
        const response = await apiRequest.get("/items");
        console.log(response.data)
        setItems(response.data);
        console.log(response.data)
    }
    catch (error) {
        console.error(error);
    }
}

  const handleSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
    try {
        apiRequest.post("/item", {
            name: newItem.name,
            quantity: Number(newItem.quantity),
            unit: newItem.unit,
            category: newItem.category,
            completed: newItem.completed,
        }).then((response) => {
            getAllItems();
        } );
        setNewItem({
            id: "0",
            name: "",
            quantity: 1,
            unit: "un",
            category: "",
            completed: false,
        });
    } catch (error) {
        console.error(error);
    }
  };

  const toggleComplete = (item: Item) => {
    try {
        apiRequest.patch(`/item`, {
            id: item.id,
            completed: !item.completed,
        }).then((response) => {
            getAllItems();
        });
    } catch (error) {
        console.error(error);
    }
};


  return {
    items,
    newItem,
    handleChange,
    handleSubmit,
    toggleComplete,
    setNewItem,
    getAllItems,
  };
};

export default useItems;
