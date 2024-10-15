import { useState } from "react";
import Select from "react-select";
import { ChevronUp, ChevronDown } from "lucide-react"; // Importe ícones que desejar
import { dataUnit } from "@/icons/CategoryIcons";
import { customStylesUnit } from "@/utils/customStyles";
import { Item } from "./DropDownCategory";


const InputUnit = ({
  handleChange,
  setNewItem,
  unit,
  newItem,
}: {
  handleChange: (e: any) => void;
  setNewItem: (newItem: any) => any;
  unit: string;
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

  return (
    <div>
      <label
        className={`${
          isFocus ? "text-purple-light" : "text-gray-200"
        } text-body`}
      >
        Quantidade
      </label>
      <div className="flex">
        <div>
          <input
            type="number"
            name="quantity"
            value={newItem.quantity}
            placeholder="1"
            onChange={handleChange}
            required
            className="focus:border-purple-light h-[40px] pl-3 text-body w-[75px] rounded-tl-md rounded-bl-md bg-gray-500 border-[1px] border-gray-300"
          />
        </div>
        <div className="flex">
          <Select
            options={dataUnit}
            styles={customStylesUnit}
            placeholder="UN."
            components={{
              DropdownIndicator: customDropdownIndicator,
            }}
            onChange={(item: any) =>
              setNewItem({ ...newItem, unit: item?.label || "" })
            }
            onMenuOpen={() => setIsFocus(true)}
            onMenuClose={() => setIsFocus(false)}
            formatOptionLabel={(item) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="ml-2">{item.label}</span>
              </div>
            )}
            value={dataUnit.find((item) => item.label === unit) || null}
            className="text-body w-[75px] "
          />
        </div>
      </div>
    </div>
  );
};

export default InputUnit;
