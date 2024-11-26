export type Icons = {
  [key: string]: JSX.Element;
};

export interface ShoppingItem {
  id: string;
  name: string;
  quantity: string;
  unit: string;
  category: string;
  completed: boolean;
}

export type DropdownUnitProps = {
  setUnit: (unit: string) => any;
  setQuantity: (quantity: string) => any;
  unit: string;
  quantity: string;
};

export type DataItems = {
  label: string;
  value: string;
};

export interface ButtonAddProps {
    addItem: () => void;
}
  