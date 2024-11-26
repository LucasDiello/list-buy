import { useState } from "react";
import { ShoppingItem } from "@/types";
import apiRequest from "@/lib/apiRequest";

export const useAddItem = () => {
  const [item, setItem] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [unit, setUnit] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);

  const getAllItems = async () => {
    console.log("chamei");
    try {
      const allItems = await apiRequest.get("/items");
      console.log("allitems", allItems.data);
      setShoppingList(allItems.data);
    } catch (error) {
      console.log("cai no error");
      console.log(error);
    }
  };

  const addItem = async () => {
    try {
      console.log(item, quantity, unit, category);
      const newItem = {
        name: item,
        quantity: parseInt(quantity),
        unit,
        category,
        completed: false,
      };
      await apiRequest.post("/item", newItem);
      getAllItems();
    } catch (error) {
      console.log("error", error);
      console.log(error);
    }
  };
  const toggleCompleted = async (item: ShoppingItem) => {
    try {
      await apiRequest.patch(`/item`, {
        id: item.id,
        completed: !item.completed,
      });
      await getAllItems();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    item,
    setItem,
    quantity,
    setQuantity,
    unit,
    setUnit,
    category,
    setCategory,
    shoppingList,
    addItem,
    toggleCompleted,
    getAllItems,
  };
};
