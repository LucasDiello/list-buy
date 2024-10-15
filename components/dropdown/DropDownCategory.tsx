import { useState } from "react";
import Select from "react-select";
import { Milk, Beef, Apple, Carrot, Sandwich, Check, Icon, ArrowUp, ArrowDown, ChevronDown, ChevronUp } from "lucide-react";
import { customStylesCategory } from "@/utils/customStyles";
import {  dataCategory, iconsCategory } from "@/icons/CategoryIcons";

export type DataItems = {
  label: string;
  value: string;
};

export type Icons = {
  [key: string]: JSX.Element;
};
export type Item = {
  id: string;
  item: string;
  quantity: number;
  unit: string;
  category: string;
  completed: boolean;
};
const DropdownCategory = ({ setNewItem, category, newItem }: { setNewItem: (item: Item) => any; category: string, newItem: Item }) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const customDropdownIndicator = (props: any) => {
        return (
            isFocus ? (
                <ChevronUp className="mr-2" size={16} color="#A881E6" />
            ) : (
                <ChevronDown className="mr-2" size={16} color="#AFABB6" /> 
            )
        );
      };
    
  
  return (
    <div className="w-[165px]">
      <label className={`${isFocus ? "text-purple-light" : "text-gray-200"} text-body`}>Categoria</label>
      <Select
        options={dataCategory}
        styles={customStylesCategory}
        placeholder="Selecione"
        components={{
            DropdownIndicator: customDropdownIndicator,
          }}
        onChange={(item: any) => setNewItem({...newItem, category: item.label })}
        onMenuOpen={() => setIsFocus(true)}
        onMenuClose={() => setIsFocus(false)}
        formatOptionLabel={(item: DataItems) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            {iconsCategory[item.value]} <span className="ml-2">{item.label} 
            </span>
          </div>
        )}
        value={dataCategory.find((item) => item.label === category) || null}
        className="text-body"
      />
    </div>
  );
};

export default DropdownCategory;
