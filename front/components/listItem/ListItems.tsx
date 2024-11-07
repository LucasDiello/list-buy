"use client";
import React, { useEffect } from "react";
import DropdownCategory from "@/components/dropdown/DropDownCategory";
import DropDownUnit from "@/components/dropdown/DropDownUnit";
import useItems from "@/hooks/useItems"; 
import ButtonItem from "./ButtonItem";
import InpuTextItem from "../InputText/InpuTextItem";
import ListItem from "./ListItem";

const ListItems = () => {
  const {
    items,
    newItem,
    handleChange,
    handleSubmit,
    toggleComplete,
    setNewItem,
    getAllItems,
  } = useItems();

  useEffect(() => {
    (async () => {
    await getAllItems();
    })();
  }, []);
  
  return (
    <section className="w-full h-[100vh] flex justify-center items-center flex-col">
      <div className=" min-h-[70vh]">
        <h1 className="text-heading1 text-left">Lista de Compras</h1>
        <form
          onSubmit={handleSubmit}
          className=" flex space-x-3 items-end mt-5"
        >
          <InpuTextItem handleChange={handleChange} newItem={newItem} />
          <DropDownUnit
            handleChange={handleChange}
            unit={newItem.unit}
            newItem={newItem}
            setNewItem={setNewItem}
          />
          <DropdownCategory
            category={newItem.category}
            newItem={newItem}
            setNewItem={setNewItem}
          />
          <ButtonItem />
        </form>
        <ListItem items={items} toggleComplete={toggleComplete} />
      </div>
    </section>
  );
};

export default ListItems;
