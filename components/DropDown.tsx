import { useState } from "react";
import Select from "react-select";
import { Milk, Beef, Apple, Carrot, Sandwich, Check, Icon, ArrowUp, ArrowDown, ChevronDown, ChevronUp } from "lucide-react";

export type DataItems = {
  label: string;
  value: string;
};

export type Icons = {
  [key: string]: JSX.Element;
};

const DropdownCategory = ({ setNewItem, category, newItem }: { setCategory: (category: string) => any; category: string }) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const data: DataItems[] = [
        { label: "Padaria", value: "1" },
        { label: "Legume", value: "2" },
        { label: "Carne", value: "3" },
        { label: "Fruta", value: "4" },
        { label: "Bebida", value: "5" },
    ];  

    const customDropdownIndicator = (props: any) => {
        return (
            isFocus ? (
                <ChevronUp className="mr-2" size={16} color="#A881E6" />
            ) : (
                <ChevronDown className="mr-2" size={16} color="#AFABB6" /> 
            )
        );
      };
    
    const icons: Icons = {
        "1": <Sandwich size={20} color="#BB9F3A" />,
        "2": <Carrot size={20} color="#8CAD51" />,
        "3": <Beef size={20} color="#DB5BBF" />,
        "4": <Apple size={20} color="#E07B67" />,
        "5": <Milk size={20} color="#7B94CB" />,
        "6": <Check size={20} color="#A881E6" />,
    };
    const customStyles = {
        control: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: "rgba(23, 23, 26, 1)",
            borderColor: state.isFocused ? "rgba(168, 129, 230, 1)" : "#252529",
            color: "white",
            boxShadow: "none", 
            "&:hover": {
                borderColor: "rgba(168, 129, 230, 1)", 
            },
            height: "40px",
            cursor: "pointer",
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected
            ? "#252529"
            : state.isFocused
            ? "#3b3b3d"
            : "transparent",
            color: "white",
            padding: "10px",
            display: "flex",
            alignItems: "center",
        }),
        menu: (provided: any) => ({
      ...provided,
      backgroundColor: "rgba(23, 23, 26, 1)",
      borderRadius: "8px",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "white", 
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "rgba(175, 171, 182, 1)",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: "rgba(175, 171, 182, 1)",
    }),
    indicatorSeparator: () => ({
      display: "none", 
    }),
  };
  
  
  return (
    <div className="w-[165px]">
      <label className={`${isFocus ? "text-purple-light" : "text-gray-200"} text-body`}>Categoria</label>
      <Select
        options={data}
        styles={customStyles}
        placeholder="Selecione"
        components={{
            DropdownIndicator: customDropdownIndicator,
          }}
        onChange={(item: any) => setNewItem({...newItem, category: item?.label || ""})}
        onMenuOpen={() => setIsFocus(true)}
        onMenuClose={() => setIsFocus(false)}
        formatOptionLabel={(item: DataItems) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            {icons[item.value]} <span className="ml-2">{item.label} 
            </span>
          </div>
        )}
        value={data.find((item) => item.label === category) || null}
        className="text-body"
      />
    </div>
  );
};

export default DropdownCategory;
