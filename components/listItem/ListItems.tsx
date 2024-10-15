"use client";
import React from "react";
import { CheckIcon, MoreVertical } from "lucide-react";
import DropdownCategory from "@/components/dropdown/DropDownCategory";
import DropDownUnit from "@/components/dropdown/DropDownUnit";
import {
  categoryColors,
  categoryTextColors,
  Icons,
} from "@/icons/CategoryIcons";
import pluralizeUnit from "@/utils/pluralizeUnit";
import useItems from "@/hooks/useItems"; // Importando o hook
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
  } = useItems();

  return (
    <section className="w-full h-[100vh] flex justify-center items-center flex-col">
      <div>
        <h1 className="text-heading1 text-left">Lista de Compras</h1>
        <form
          onSubmit={handleSubmit}
          className=" flex  space-x-3 items-end mt-5"
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
