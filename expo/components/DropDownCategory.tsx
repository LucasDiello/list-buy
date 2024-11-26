import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Milk,
  Beef,
  Apple,
  Carrot,
  Sandwich,
  Check,
} from "lucide-react-native";
import { useAddItem } from "@/hooks/useAddItem";

export type DataItems = {
  label: string;
  value: string;
};
export type Icons = {
  [key: string]: JSX.Element;
};

const DropdownCategory = ({setCategory, category} : {setCategory: (category : string) => any, category: string}) => {
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  
  const data: DataItems[] = [
    { label: "Padaria", value: "1" },
    { label: "Legume", value: "2" },
    { label: "Carne", value: "3" },
    { label: "Fruta", value: "4" },
    { label: "Bebida", value: "5" },
  ];

  const icons: Icons = {
    "1": <Sandwich size={20} color="#BB9F3A" />,
    "2": <Carrot size={20} color="#8CAD51" />,
    "3": <Beef size={20} color="#DB5BBF" />,
    "4": <Apple size={20} color="#E07B67" />,
    "5": <Milk size={20} color="#7B94CB" />,
    "6": <Check size={20} color="#A881E6" />,
  };
  return (
    <View className="w-[45%] mr-2">
      <Text
        className={`${
          isFocus ? "text-[#A881E6]" : "text-[#A5A5B1]"
        } text-xs mb-2`}
      >
        Categoria
      </Text>
      <Dropdown
        style={[
          styles.dropdown,
          isFocus
            ? { borderColor: "rgba(168, 129, 230, 1)" }
            : { borderColor: "#252529" },
        ]}
        selectedTextStyle={{ color: "white" }}
        activeColor="#252529"
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={"Selecione"}
        placeholderStyle={{ color: "rgba(175, 171, 182, 1)" }}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item: DataItems) => {
          setValue(item.value);
          setCategory(item.label);
        }}
        confirmSelectItem={true}
        renderRightIcon={() => (
          <Icon 
            name={isFocus ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={20}
            color={
              isFocus ? "rgba(168, 129, 230, 1)" : "rgba(175, 171, 182, 1)"
            }
          />
        )}
        renderItem={(item: DataItems) => {
          return (
            <View className="flex-row space-x-2 items-center p-3 border-b-[1px] border-gray-300">
              {icons[item.value]}
              <Text className="flex-1 text-white text-base">
                {" "}
                {item.label}{" "}
              </Text>
              {item.value === value && icons["6"]}
            </View>
          );
        }}
        containerStyle={styles.containerStyle}
        closeModalWhenSelectedItem={false}
      />
    </View>
  );
};

export default DropdownCategory;

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 2,
    borderRadius: 8,
    borderColor: "#252529",
    backgroundColor: "rgba(23, 23, 26, 1)",
    overflow: "hidden",
  },
  dropdown: {
    height: 50,
    borderColor: "rgb(37, 37, 41, 1)",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "rgba(23, 23, 26, 1)",
    width: "100%",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "rgba(175, 171, 182, 1)",
  },
});
