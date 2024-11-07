import { useState } from "react";
import Select, { components } from "react-select";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Apple, Beef, Carrot, Check, Milk, Sandwich } from "lucide-react";
import { Item } from "@/types";
import { customStylesCategory } from "@/utils/customStyles";

const DropdownCategory = ({
  setNewItem,
  category,
  newItem,
}: {
  setNewItem: (item: any) => any;
  category: string;
  newItem: Item;
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const customDropdownIndicator = (props: any) => {
    return isFocus ? (
      <ChevronUp className="mr-2" size={16} color="#A881E6" />
    ) : (
      <ChevronDown className="mr-2" size={16} color="#AFABB6" />
    );
  };

  const dataCategory: {
    label: string;
    value: string;
  }[] = [
    { label: "Padaria", value: "1" },
    { label: "Legume", value: "2" },
    { label: "Carne", value: "3" },
    { label: "Fruta", value: "4" },
    { label: "Bebida", value: "5" },
  ];

  const iconsCategory: { [key: string]: JSX.Element } = {
    "1": <Sandwich size={20} color="#BB9F3A" />,
    "2": <Carrot size={20} color="#8CAD51" />,
    "3": <Beef size={20} color="#DB5BBF" />,
    "4": <Apple size={20} color="#E07B67" />,
    "5": <Milk size={20} color="#7B94CB" />,
  };

  const IconOption = (props: any) => (
    <components.Option {...props}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {iconsCategory[props.data.value]}
        <span className="ml-2 text-white">{props.data.label}</span>
      </div>
    </components.Option>
  );


  return (
    <div className="w-[165px]">
      <label
        className={`${
          isFocus ? "text-purple-light" : "text-gray-200"
        } text-body`}
      >
        Categoria
      </label>
      <Select
        options={dataCategory}
        styles={customStylesCategory}
        placeholder="Selecione"
        components={{
          DropdownIndicator: customDropdownIndicator,
          Option: IconOption,
        }}
        onChange={(item: any) =>
          setNewItem({ ...newItem, category: item.label })
        }
        onMenuOpen={() => setIsFocus(true)}
        onMenuClose={() => setIsFocus(false)}
        value={dataCategory.find((item) => item.label === category) || null}
        closeMenuOnSelect={true}
        className="text-body"
      />
    </div>
  );
};

export default DropdownCategory;
