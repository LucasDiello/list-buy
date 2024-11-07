import { Apple, Beef, Carrot, Check, Milk, Sandwich } from "lucide-react";
import React from "react";

export const Icons = {
  Fruta: React.createElement(Apple, { size: 20, color: "#E07B67" }),
  Legume: React.createElement(Carrot, { size: 20, color: "#8CAD51" }),
  Padaria: React.createElement(Sandwich, { size: 20, color: "#BB9F3A" }),
  Carne: React.createElement(Beef, { size: 20, color: "#DB5BBF" }),
  Bebida: React.createElement(Milk, { size: 20, color: "#7B94CB" }),
};

export const categoryColors: { [key: string]: string } = {
  Fruta: "rgb(38, 26, 23, 1)",
  Legume: "rgb(28, 32, 21, 1)",
  Padaria: "rgb(26, 29, 35, 1)",
  Carne: "rgb(37, 22, 34, 1)",
  Bebida: "rgb(26, 29, 35, 1)",
};

export const categoryTextColors: { [key: string]: string } = {
  Fruta: "rgb(224, 123, 103, 1)",
  Legume: "rgb(140, 173, 81, 1)",
  Padaria: "rgb(187, 159, 58, 1)",
  Carne: "rgb(219, 91, 191, 1)",
  Bebida: "rgb(123, 148, 203, 1)",
};

export const dataUnit: {
  label: string;
  value: string;
}[] = [
  { label: "Unidade", value: "1" },
  { label: "L", value: "2" },
  { label: "Kg", value: "3" },
];

export const dataCategory: {
  label: string;
  value: string;
}[] = [
  { label: "Padaria", value: "1" },
  { label: "Legume", value: "2" },
  { label: "Carne", value: "3" },
  { label: "Fruta", value: "4" },
  { label: "Bebida", value: "5" },
];

export const iconsCategory: { [key: string]: JSX.Element } = {
  "1": <Sandwich size={20} color="#BB9F3A" />,
  "2": <Carrot size={20} color="#8CAD51" />,
  "3": <Beef size={20} color="#DB5BBF" />,
  "4": <Apple size={20} color="#E07B67" />,
  "5": <Milk size={20} color="#7B94CB" />,
  "6": <Check size={20} color="#A881E6" />,
};
