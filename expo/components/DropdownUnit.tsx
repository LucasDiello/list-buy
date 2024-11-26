import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Check } from "lucide-react-native";
import { DataItems, DropdownUnitProps } from "@/types";

const DropdownUnit = ({ setUnit, setQuantity, unit, quantity }: DropdownUnitProps) => {
  const [value, setValue] = useState<string | null>(null);
  const [isFocusInput, setIsFocusInput] = useState<boolean>(false);
  const [isFocusDropdown, setIsFocusDropdown] = useState<boolean>(false);

  const data: DataItems[] = [
    { label: "Un.", value: "1" },
    { label: "L", value: "2" },
    { label: "Kg", value: "3" },
  ];

  return (
        <View className="   w-[40%] mr-2">
      <Text
        className={`${
          isFocusInput ? "text-[#A881E6]" : "text-[#A5A5B1]"
        } text-xs mb-2`}
      >
        Quantidade
      </Text>
      <View className="flex-row w-full">
        <TextInput
          className={`pl-2 text-white bg-gray-400 w-[50%] rounded-tl-lg rounded-bl-lg border-[1px] ${
            isFocusInput ? "border-[#A881E6]" : "border-gray-300"
          }`}
          placeholder="1"
          placeholderTextColor="#A0AEC0"
          keyboardType="numeric"
          onChange={(e) => {
            setQuantity(e.nativeEvent.text);
          }}
          onFocus={() => setIsFocusInput(true)}
          onBlur={() => setIsFocusInput(false)}
          value={quantity}
        />  
        <Dropdown
          style={[
            styles.dropdown,
            isFocusDropdown
              ? { borderColor: "rgba(168, 129, 230, 1)" }
              : { borderColor: "#252529" },
          ]}
          selectedTextStyle={{ color: "white" }}
          activeColor="#252529"
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="UN."
          placeholderStyle={{ color: "rgba(175, 171, 182, 1)" }}
          value={value}
          onFocus={() => setIsFocusDropdown(true)}
          onBlur={() => setIsFocusDropdown(false)}
          onChange={(item: DataItems) => {
            setValue(item.value);
            if (item.value === "1") {
              setUnit(Number(quantity) > 1 ? "Unidades" : "Unidade");
            } else if (item.value === "2") {
              setUnit(Number(quantity) > 1 ? "Litros" : "Litro");
            } else if (item.value === "3") {
              setUnit("Kg");
            }
            console.log(item.value, quantity)
          }}
          
          renderRightIcon={() => (
            <Icon
              name={
                isFocusDropdown ? "keyboard-arrow-up" : "keyboard-arrow-down"
              }
              size={20}
              color={
                isFocusDropdown
                  ? "rgba(168, 129, 230, 1)"
                  : "rgba(175, 171, 182, 1)"
              }
            />
          )}
          renderItem={(item: DataItems) => {
            return (
              <View className="flex-row space-x-2 items-center p-3 border-b-[1px] border-gray-300">
                <Text className="flex-1 text-white text-base">
                  {item.label}
                </Text>
                {item.value === value && <Check size={12} color="#A881E6" />}
              </View>
            );
          }}
          containerStyle={styles.containerStyle}
          closeModalWhenSelectedItem={false}
        />
      </View>
      </View>
  );
};

export default DropdownUnit;

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
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "rgba(23, 23, 26, 1)",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: "50%",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "rgba(175, 171, 182, 1)",
  },
});
