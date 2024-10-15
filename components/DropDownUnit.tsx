import { useState } from "react";
import Select from "react-select";
import { Weight, ChevronUp, ChevronDown } from "lucide-react"; // Importe ícones que desejar

export type DataItems = {
  label: string;
  value: string;
};

export type Icons = {
  [key: string]: JSX.Element;
};

const InputUnit = ({
  handleChange,
  setNewItem,
  unit,
  newItem,
}: {
  setNewItem: (newItem: any) => any;
  unit: string;
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const data: DataItems[] = [
    { label: "Unidade ", value: "1" },
    { label: "L", value: "2" },
    { label: "Kg", value: "3" },
  ];

  const customDropdownIndicator = (props: any) => {
    return isFocus ? (
      <ChevronUp className="mr-2" size={16} color="#A881E6" />
    ) : (
      <ChevronDown className="mr-2" size={16} color="#AFABB6" />
    );
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
      borderRadius: "0 8px 8px 0",
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
      padding: "10px 0px",
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
            options={data}
            styles={customStyles}
            placeholder="UN."
            components={{
              DropdownIndicator: customDropdownIndicator,
            }}
            onChange={(item: any) =>
              setNewItem({ ...newItem, unit: item?.label || "" })
            }
            onMenuOpen={() => setIsFocus(true)}
            onMenuClose={() => setIsFocus(false)}
            formatOptionLabel={(item: DataItems) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="ml-2">{item.label}</span>
              </div>
            )}
            value={data.find((item) => item.label === unit) || null}
            className="text-body w-[75px] "
          />
        </div>
      </div>
    </div>
  );
};

export default InputUnit;
